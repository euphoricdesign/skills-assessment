'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import RejectModal from './RejectModal'

const FileUploadButton = () => {
  const [file, setFile] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]

    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile)
    } else {
      setIsOpen(true)
    }
  }

  const handleUpload = async () => {
    if (!file) return

    try {
      await fetch("https://example.com/api/upload-start")

      //* Lógica de carga a Vercel Blob Storage
      //* ...

      await fetch("https://example.com/api/upload-success")
    } catch (error) {
      await fetch("https://example.com/api/upload-fail")
    }
  }

  return (
    <div className='file-upload-container'>
        <input type="file" onChange={handleFileChange} />
        <Button variant="outline" onClick={handleUpload} disabled={!file}>Send</Button>
        <RejectModal isOpen={isOpen} onClose={setIsOpen} />
    </div>
  )
}

export default FileUploadButton