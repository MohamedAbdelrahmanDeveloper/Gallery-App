'use client'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'
import Button from './button'
import { useRouter } from 'next/navigation'
import { removeFromAlbum, removeImage } from '@/actions/actions'
import ShowImage from '../modals/ShowImage'
import AddToAlbum from '../modals/AddToAlbum'

function CloudinaryImage({image} : {image:any}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  function deletImageHandelClick(e:React.MouseEvent<HTMLAnchorElement>) {
    setLoading(true)
    removeImage(image.public_id)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    setTimeout(() => {
      router.refresh();
    }, 3500)
  }

  function moveImageHandelClick(e:React.MouseEvent<HTMLAnchorElement>) {
    removeFromAlbum(image)
  }


  function isImageInFolder(e: string) {
    let parts = e.split("/");
    return parts.length > 1
  }
  
  return (
    <div key={image.public_id + 'div'} className=' relative'>
      <Button public_id={image.public_id} isFav={image.tags.includes('favorite')} />
      <div className="dropdown dropdown-end absolute right-2">
        <div tabIndex={0} role="button" className="btn m-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a>
              <AddToAlbum image={image}/>
            </a>
          </li>
          <li>
            <a onClick={deletImageHandelClick} className='flex justify-between text-error'>
              <span>Delete</span>
              {loading && <span className="loading loading-spinner text-primary"></span>}
            </a>
          </li>
          {isImageInFolder(image.public_id) && <li>
            <a onClick={moveImageHandelClick} className='flex justify-between text-error'>
              <span>Remove from album</span>
            </a>
          </li>}
        </ul>
      </div>
    <ShowImage image={image.public_id}/>
    <CldImage
      className="rounded shadow w-full"
      key={image.public_id}
      width="560"
      height="300"
      src={image.public_id}
      sizes="50vw"
      alt="Description of my image"
    />
  </div> 
  )
}

export default CloudinaryImage