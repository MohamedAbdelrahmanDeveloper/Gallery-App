'use client'
import { useRouter } from "next/navigation";
import Modal from "./Modal"
import { Dispatch, SetStateAction, useState } from "react";

type AlertType = {
  message: string
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>
}
export default function Alert({message, modal, setModal} : AlertType) {
  // const [album, setAlbum] = useState<string>('');
  // const [error, setError] = useState<string>('');
  // const router = useRouter();
  
  return (
    <Modal modal={modal} setModal={setModal} title={message} className="max-w-xl">
      <Modal.Body>
          {/* {message && <span className="text-warning">{message}</span>} */}
          <div className="toast">
            <div className="alert alert-info">
              <span>New message arrived.</span>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  )
}

