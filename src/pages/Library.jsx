import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import FavouriteSongs from './songs/FavouriteSongs'

const Library = () => {
  const {loading,user,message}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <div>
      <div className="flex flex-col bg-white m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Favourites
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            user && user.favourites.map((song)=> (
              <FavouriteSongs key={song.preview_url} song={song} />
            ))
          }
        </div>
      </div>
  </div>
    </div>
  )
}

export default Library