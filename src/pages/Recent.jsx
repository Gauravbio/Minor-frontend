import React from 'react'
import { useDispatch } from 'react-redux'
import { playerAction } from '../actions/spotify';

const Recent = ({song}) => {
    const dispatch=useDispatch();
    const handlePlayer=()=> {
        dispatch(playerAction(song));
    }

    
  return (
    <div className="inline-block px-3 cursor-pointer" onClick={handlePlayer}>
        <div
            className="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img className="h-52" src={song.album.images[0].url} alt="song_img" />
          <h3 className='text-xl'>{song.name.length>30 ? song.name.slice(0,30)+"..." : song.name}</h3>
        </div>
    </div>
  )
}

export default Recent