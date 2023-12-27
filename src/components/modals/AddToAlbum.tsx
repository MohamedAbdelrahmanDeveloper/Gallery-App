'use client'
import { useRouter } from "next/navigation";
import Modal from "./Modal"
import { useState } from "react";
import { addImageToAlbum } from "@/actions/actions";
import { ResultType } from "@/types/types";


export default function AddToAlbum({image} : {image: ResultType}) {
  const [modal, setModal] = useState(false);
  const [album, setAlbum] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  async function handelSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (album.length > 2) {
      await addImageToAlbum(image, album)
      setTimeout(() => {
        setModal(!modal);
      }, 2000)
  
      setTimeout(() => {
        router.refresh();
      }, 3000)
    }
    else {
      setError('Please write album Name')
      setTimeout(() => {
        setError('')
      }, 5000);
    }
  }
  return (
    <Modal modal={modal} setModal={setModal} title='Add to Album' className="max-w-xl" textBtn='Add to album'>
      <Modal.Body>
          <form onSubmit={handelSubmit} className="space-y-2">
            {error && <span className="alert alert-warning">{error}</span>}
            <input onChange={e => setAlbum(e.target.value)} className="input input-bordered w-full" />
            <input type="submit" value="Save" className="btn btn-primary w-full" />
          </form>
      </Modal.Body>
    </Modal>
  )
}

