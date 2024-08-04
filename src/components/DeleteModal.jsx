import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog"

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar Archivo</DialogTitle>
          <DialogDescription>
            ¿Estás seguro que quieres eliminar este archivo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onDelete}>Delete</Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
