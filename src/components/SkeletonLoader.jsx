import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

export default function FileListSkeleton({files}) {
  return (
    <div style={{padding: '20px', width: '100%'}} className='file-list-container'>
      <Skeleton style={{background: 'lightgray', marginTop: '5px', marginBottom: '30px', height:'40px', width: '200px'}} />
      <div className="space-y-2">
        <Skeleton style={{background: 'lightgray', marginTop: '10px', height: '40px'}} />
        <Skeleton style={{background: 'lightgray', marginTop: '10px', height: '40px'}} />
        <Skeleton style={{background: 'lightgray', marginTop: '10px', height: '40px'}} />
        <Skeleton style={{background: 'lightgray', marginTop: '10px', height: '40px'}} />
      </div>
    </div>
  )
}