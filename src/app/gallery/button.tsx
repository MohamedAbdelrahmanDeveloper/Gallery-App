'use client'
import { useRouter } from 'next/navigation'
import { setAsFavoriteAction } from './action'
import { useState } from 'react';


function Button({public_id, isFav, text}: {public_id:string, isFav: boolean, text: string}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  return (
    <button className='btn'
        onClick={() => {
          setLoading(true)
          setAsFavoriteAction(public_id, isFav)
          router.refresh();
          setLoading(false)
        }}
    >{loading && 'loading..'}{text}</button>
  )
}

export default Button