import React from 'react'

const GetSongs = () => {
  return (
    <div class="flex border-b border-gray-800 hover:bg-gray-800 items-center"  style={{height:"70px"}}>
      <div class="p-3 w-8 flex-shrink-0">▶️</div>
      <div class="p-3 w-8 flex-shrink-0">❤️</div>
      <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}}>My Song Here</div>
      <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
      </div>
  )
}

export default GetSongs