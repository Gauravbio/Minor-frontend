import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {recentAction} from '../../actions/user'
import { RxCross1 } from "react-icons/rx";
import {FcLike} from 'react-icons/fc'
import { useAlert } from 'react-alert';
import {favouriteAction} from '../../actions/user'

const Player = ({song}) => {
  const dispatch=useDispatch();
  const alert=useAlert()
  const {user,message}=useSelector(state=> state.user)

  const handlePlayer=()=> {
    dispatch({type:"SONG_PLAYING_FAILURE"});
  }

  const handleFavourites=()=> {
    
    user && dispatch(favouriteAction(song,user._id))
  }

  useEffect(()=> {
    user && dispatch(recentAction(user._id,song))
  },[dispatch,user,song])

  useEffect(()=> {
    if(message) alert.success(message)
  },[message,alert])

  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center ml-14 '>
    <div class="flex border-b bg-black border-gray-800 hover:bg-gray-800 items-center" >
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      <div className='flex items-center justify-center w-1/2'><audio src={song.preview_url}  controls autoPlay /></div>
      <div className='w-12 ml-3 text-white cursor-pointer' onClick={handleFavourites}><FcLike /></div>
      <div className='w-12 mr-0 text-white cursor-pointer' onClick={handlePlayer}><RxCross1 /></div>
      </div>
      </div>
  )
}

export default Player