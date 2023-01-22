import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topSongs } from '../actions/spotify'
import Loader from '../components/Loader'
import TopSongs from './songs/TopSongs'

const Dashboard = () => {
  const {loading}=useSelector(state=> state.user)
  const dispatch=useDispatch();
  // const {top_songs}=useSelector(state=> state.songs)
  // useEffect(()=> {
  //   dispatch(topSongs())
  // },[dispatch])

  const top_songs=[
      {
          trackMetadata:{
              artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e02511a66760837c2496d3375ca"
      }},
    
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }},
    
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }},
    
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }},
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }},
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }},
    
      {trackMetadata:{
        artists:[
          {name: 'King', spotifyUri: 'spotify:artist:5NHm4TU5Twz7owibYxJfFU'}
        ],
        trackName:"Shakira: Bzrp Music Sessions, Vol. 53",
        trackUri:"spotify:track:4nrPB8O7Y7wsOCJdgXkthe",
        displayImageUri:"https://i.scdn.co/image/ab67616d00001e026e5bd2a10414d383b4f9c0ca"
      }}
  ]
  
  return (
    loading ? <Loader className="h-screen" /> :
    <div className="flex flex-col bg-white m-auto p-auto">
<h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Top Songs
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            top_songs && top_songs.map((song)=> (
              <TopSongs key={song.trackMetadata.trackUri} song={song.trackMetadata} />
            ))
          }
          
        </div>
      </div>
</div>

  )
}

export default Dashboard