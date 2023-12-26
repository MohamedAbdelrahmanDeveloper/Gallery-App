'use client'
import { setAsFavoriteAction } from './action'

function Button({public_id, isFav}: {public_id:string, isFav: boolean}) {
  return (
    <button className='btn'
        onClick={() => {
            setAsFavoriteAction(public_id, isFav)
        }}
    >fav</button>
  )
}

export default Button