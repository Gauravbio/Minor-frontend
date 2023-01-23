import React from 'react'

const Top_songs = ({song}) => {
  return (
    <div className="inline-block px-3">
        <div
            className="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img className="h-52" src={song.displayImageUri} alt="song_img" />
          <h3 className='text-xl'>{song.trackName.length>30 ? song.trackName.slice(0,30)+"..." : song.trackName}</h3>
        </div>
    </div>
  )
}

export default Top_songs