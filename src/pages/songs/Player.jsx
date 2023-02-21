import React from 'react'

const Player = ({song}) => {
  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center'>
    <div class="flex border-b bg-black border-gray-800 hover:bg-gray-800 items-center" >
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      {/* <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}} >{song.name > 15 ? song.name.slice(0,12)+"...":song.name}</div> */}
      <div className='flex items-center justify-center'><audio src={song.preview_url}  controls autoPlay /></div>
      
      </div>
      </div>
  )
}

export default Player