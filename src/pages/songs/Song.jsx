import React from 'react'

const Song = ({song}) => {
  return (
    <div>
        <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
    </div>
  )
}

export default Song