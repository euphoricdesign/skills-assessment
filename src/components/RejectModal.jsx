import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const RejectModal = ({isOpen, onClose}) => {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>File too large</DialogTitle>
            </DialogHeader>
            <p>Please select a file size of 5MB or less.</p>
        </DialogContent>
    </Dialog>

  )
}

export default RejectModal