'use client'
import { CldUploadButton } from 'next-cloudinary'


function page() {
  return (
    <main className='container mx-auto flex flex-col items-center justify-center'>
      <div>
        <div className="hero min-h-screen bg-base-200 -mt-20">
            <div className="hero-content text-center">
              <div className="max-w-2xl"> 
                <h1 className="text-5xl font-bold">Gallery App</h1>
                <p className="py-6 text-xl">Photo gallery built with Next.js. It allows visitors to explore a diverse range of photos with a seamless and efficient viewing experience.</p>
                <CldUploadButton onUpload={(results:any, widget: any) => widget.close()} className='btn btn-primary'  uploadPreset="bubchj8t" />        
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}

export default page