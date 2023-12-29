'use client'
import { removeFolder } from '@/actions/actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function DeleteFolder({folder}: {folder: string}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
  
    async function handelClick(e:React.MouseEvent<HTMLButtonElement>) {
      setLoading(true)
      let err = await removeFolder(folder)
      if (err) {
        setError(err)
        setLoading(false)
        setTimeout(() => {
          setError(null)
        }, 2000)
      }
      else {
        setTimeout(() => {
          setLoading(false)
          router.refresh();
        }, 2500)
      }
    }
  
  return (
    <div>
      <button onClick={handelClick} className='btn btn-error btn-sm' >Delete
        {loading && <span className="loading loading-spinner text-primary"></span>}
      </button>
      {error && <div className="toast toast-end">
          <div className="alert alert-warning">
            <span>{error}</span>
          </div>
        </div>}
    </div>
  )
}
