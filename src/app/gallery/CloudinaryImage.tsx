'use client'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import Button from './button'
import ShowModal from '@/components/modals/ShowModal'


function CloudinaryImage({image} : {image:any}) {  
  return (
    <div key={image.public_id + 'div'} className=' relative'>
    <Button public_id={image.public_id} isFav={image.tags.includes('favorite')} />
    <ShowModal image={image.public_id}/>
    <CldImage
      className="rounded shadow"
      key={image.public_id}
      width="560"
      height="300"
      src={image.public_id}
      sizes="100vw"
      alt="Description of my image"
    />
  </div> 
  )
}

export default CloudinaryImage