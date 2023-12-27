'use client'
import { removeFolder } from '@/actions/actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function DeleteFolder({folder}: {folder: string}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
  
    function handelClick(e:React.MouseEvent<HTMLButtonElement>) {
      setLoading(true)
      let s = removeFolder(folder)
      console.log(s);
      setTimeout(() => {
        setLoading(false)
      }, 3000)
      setTimeout(() => {
        router.refresh();
      }, 3500)
    }
  
  return (
    <button onClick={handelClick} className='btn' >delete
    {loading && <span className="loading loading-spinner text-primary"></span>}
    </button>
  )
}
