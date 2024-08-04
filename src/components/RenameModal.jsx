import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";

const RenameModal = ({ isOpen, onClose, onSave, initialName }) => {
  const [newName, setNewName] = useState(initialName);

  const handleSave = () => {
    onSave(newName);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Renombrar Archivo</DialogTitle>
          <DialogDescription>
            Introduce el nuevo nombre para el archivo.
          </DialogDescription>
        </DialogHeader>
        <Input 
          type="text" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
        />
        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
