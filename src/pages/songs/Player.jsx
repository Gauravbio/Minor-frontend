import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {recentAction} from '../../actions/user'

const Player = ({song}) => {
  const dispatch=useDispatch();
  const {user}=useSelector(state=> state.user)

  useEffect(()=> {
    user && dispatch(recentAction(user._id,song))
  },[dispatch,user,song])

  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-center items-center'>
    <div class="flex border-b bg-black border-gray-800 hover:bg-gray-800 items-center" >
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      <div className='flex items-center justify-center'><audio src={song.preview_url}  controls autoPlay /></div>
      </div>
      </div>
  )
}

export default Player