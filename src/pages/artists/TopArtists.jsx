import React from 'react'
import { Link } from 'react-router-dom'

const TopArtists = ({artist}) => {
  const id=artist.uri.split(":")[2]
  return (
    <Link to={`/artist/${id}`}>
    <div className="inline-block px-3 cursor-pointer">
        <div
            className="w-52 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img className="h-52" src={artist.visuals.avatarImage.sources[0].url} alt="song_img" />
          <h3 className='text-xl'>{artist.profile.name.length>30 ? artist.profile.name.slice(0,30)+"..." : artist.profile.name}</h3>
        </div>
    </div>
    </Link>
  )
}

export default TopArtists