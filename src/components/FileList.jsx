import React, { useState } from 'react';
import { SlPencil, SlTrash } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import RenameModal from './RenameModal';
import DeleteModal from './DeleteModal';

const FileList = ({ files, onRename, onDelete }) => {
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

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

  return (
    <div>
      {files.map(file => (
        <div key={file.id}>
          <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
          <Button onClick={() => handleRenameClick(file)}>
            <SlPencil />
          </Button>
          <Button onClick={() => handleDeleteClick(file)}>
            <SlTrash />
          </Button>
        </div>
      ))}
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
