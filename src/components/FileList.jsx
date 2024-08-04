import React, { useEffect, useState } from 'react';
import { SlPencil, SlTrash } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import RenameModal from './RenameModal';
import DeleteModal from './DeleteModal';
import FileListSkeleton from './SkeletonLoader'

const FileList = ({ files, onRename, onDelete }) => {
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [currentFile, setCurrentFile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRenameClick = (file) => {
    setCurrentFile(file);
    setIsRenameModalOpen(true);
  };

  const handleDeleteClick = (file) => {
    setCurrentFile(file);
    setIsDeleteModalOpen(true);
  };

  const handleRename = (newName) => {
    onRename(currentFile, newName);
    setIsRenameModalOpen(false);
  };

  const handleDelete = () => {
    onDelete(currentFile);
    setIsDeleteModalOpen(false);
  };

  const handleDownload = (file) => {
    fetch(file.url)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error al descargar el archivo:', error));
  };

  if (loading) {
    return <FileListSkeleton files={files} />;
  }


  return (
    <div className="file-list-container">
      <h2>File List</h2>
      {files.length === 0 ? (
        <p style={{textAlign: 'center'}}>No files in the list.</p>
      ) : (
        files.map(file => (
        <div key={file.id} className="file-list-item">
          <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
          <Button onClick={() => handleRenameClick(file)} className="rename-button">
            <SlPencil />
          </Button>
          <Button onClick={() => handleDeleteClick(file)} className="delete-button">
            <SlTrash />
          </Button>
          <Button onClick={() => handleDownload(file)} className="download-button">
            <BsDownload />
          </Button>
        </div>
        ))
      )}
      {isRenameModalOpen && (
        <RenameModal
          isOpen={isRenameModalOpen}
          onClose={() => setIsRenameModalOpen(false)}
          onSave={handleRename}
          initialName={currentFile.name}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default FileList;
