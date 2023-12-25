import React from 'react'

function loading() {
  return (
    <div className='h-full w-full flex justify-center items-center backdrop-blur-md'>
        <span className="loading loading-spinner text-primary w-[3.5rem] -mt-40"></span>
    </div>
  )
}

export default loading