import React from 'react'
import { Link } from 'react-router-dom';

const SearchPlaylist = ({playlist}) => {
  const id=playlist.uri.split(":")[2];
  return (
    <Link to={`/playlist/${id}`} className="flex justify-between hover:translate-x-1 shadow-md hover:bg-gray-800 items-center cursor-pointer" style={{height:"70px"}}>
    <div className='flex items-center'>
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={playlist.images.items[0].sources[0].url} alt="song"/>
      </div>
      <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}} >{playlist.name.length > 12 ? playlist.name.slice(0,12)+"...":playlist.name}</div>
      </div>
      <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
      </Link>
  )
}

export default SearchPlaylist