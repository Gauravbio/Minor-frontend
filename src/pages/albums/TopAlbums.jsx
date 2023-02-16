import React from 'react'
import { Link } from 'react-router-dom';

const TopAlbums = ({album}) => {
  const id=album.uri.split(":")[2];
  return (
    <Link to={`/album/${id}`}>
    <div className="inline-block px-3 cursor-pointer">
        <div
            className="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img className="h-52" src={album.coverArt.sources[0].url} alt="song_img" />
          <h3 className='text-xl'>{album.name.length>30 ? album.name.slice(0,30)+"..." : album.trackName}</h3>
        </div>
    </div>
    </Link>
  )
}

export default TopAlbums