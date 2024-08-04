'use server'

import { put } from '@vercel/blob';

export async function uploadBlob(formData) {
  const file = formData.get('file');
  
  if (!file) {
    throw new Error('No file provided');
  }

  try {
    const blob = await put(file.name, file, {
      access: 'public',
    });

    return { url: blob.url, id: blob.pathname };
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    throw new Error('Failed to upload file');
  }
}