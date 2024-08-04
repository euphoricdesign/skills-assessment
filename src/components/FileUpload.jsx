'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import RejectModal from './RejectModal';
import FileList from './FileList';
import ErrorBoundary from './error/ErrorBoundary';
import { uploadBlob } from '@/app/actions/uploadBlob';
import { deleteBlob } from '@/app/actions/deleteBlob';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem('files')) || [];
    setFiles(savedFiles);
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      setIsOpen(true);
    }
  };

  const handleUpdateFiles = (newFiles) => {
    setFiles(newFiles);
    localStorage.setItem('files', JSON.stringify(newFiles));
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      // await fetch("https://example.com/api/upload-start")
      const formData = new FormData();
      formData.append('file', file);

      const result = await uploadBlob(formData);

      const newFile = { id: result.id, name: file.name, url: result.url };
      handleUpdateFiles([...files, newFile]);

      setFile(null);
      // await fetch("https://example.com/api/upload-success")
    } catch (error) {
      setError(error.message);
      // await fetch("https://example.com/api/upload-fail")
    } finally {
      setLoading(false);
    }
  };

  const handleRename = useCallback((file, newName) => {
    setFiles(prevFiles => {
      const updatedFiles = prevFiles.map(f => f.id === file.id ? { ...f, name: newName } : f);
      localStorage.setItem('files', JSON.stringify(updatedFiles));
      return updatedFiles;
    });
  }, []);

  const handleDelete = useCallback(async (file) => {
    try {
      if (!file.url) {
        throw new Error('Invalid file URL');
      }

      await deleteBlob(file.url);
      setFiles(prevFiles => {
        const updatedFiles = prevFiles.filter(f => f.id !== file.id);
        localStorage.setItem('files', JSON.stringify(updatedFiles));
        return updatedFiles;
      });
    } catch (error) {
      console.error('z:', error);
    }
  }, []);


  return (
    <ErrorBoundary>
      <div style={{display:'flex', gap:'10px'}}>
        <div className="file-upload-container">
          <input type="file" id="file" onChange={handleFileChange} />
          <label style={{cursor:'pointer'}} htmlFor="file">Select a file</label>
          
          <RejectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          {error && <div className="error">{error}</div>}
        </div>
        <Button className='button' variant="outline" onClick={handleUpload} disabled={!file || loading}>
          {loading ? 'Uploading...' : 'Send'}
        </Button>
      </div>
      <FileList files={files} onRename={handleRename} onDelete={handleDelete} />
    </ErrorBoundary>
  );
}

export default FileUpload;
