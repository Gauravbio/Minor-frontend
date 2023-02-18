import React, { useRef } from 'react'

const Player = ({song}) => {
    const audio=song.preview_url
  return (
    <div className='relative cursor-pointer'>
    <div class="flex border-b bg-black border-gray-800 hover:bg-gray-800 items-center absolute bottom-0" >
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      {/* <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}} >{song.name > 15 ? song.name.slice(0,12)+"...":song.name}</div> */}
      <div className='flex items-center justify-center'><audio src={song.preview_url} controls /></div>
      
      </div>
      </div>
  )
}

export default Player