import React from 'react'
import {Link} from 'react-router-dom'

const TopPlaylists = ({playlist}) => {
  const id=playlist.uri.split(":")[2];
  
  return (
    <Link to={`/playlist/${id}`}>
    <div className="inline-block px-3">
    <div
        className="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <img className="h-52" src={playlist.images.items[0].sources[0].url} alt="song_img" />
      <h3 className='text-xl'>{playlist.name.length>30 ? playlist.name.slice(0,30)+"..." : playlist.name}</h3>
    </div>
</div>
</Link>
  )
}

export default TopPlaylists