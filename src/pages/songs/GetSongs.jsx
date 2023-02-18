import React from 'react'
import { useDispatch } from 'react-redux'
import { playerAction } from '../../actions/spotify';
// import Player from './Player'

const GetSongs = ({song}) => {
  const dispatch=useDispatch();
   const handlePlayer=()=> {
    dispatch(playerAction(song));
   }
  return (
    <div class="flex border-b border-gray-800 hover:bg-gray-800 items-center cursor-pointer"  style={{height:"70px"}} onClick={handlePlayer}>
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}} >{song.name > 15 ? song.name.slice(0,12)+"...":song.name}</div>
      <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
      </div>
  )
}

export default GetSongs