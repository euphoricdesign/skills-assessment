'use server';
import { del } from '@vercel/blob';

export async function deleteBlob(url) {
  if (!url) {
    throw new Error('URL is required to delete a blob');
  }

  try {
    await del(url);
  } catch (error) {
    console.error('Error deleting blob:', error);
    throw new Error('Error deleting blob: ' + error.message);
  }
}
