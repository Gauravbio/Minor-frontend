import React from 'react'
import { useParams } from 'react-router-dom'
import GetSongs from '../songs/GetSongs';

const Playlist = () => {
    const {id} = useParams();

    const playlistDetails={
      images:[
        {
          url:"https://i.scdn.co/image/ab67706f00000003f1f02761d4ac4a745a6fbaa2"
        }
      ]
    }

    const playlist={
      items:[
        {
          track:{
            album:{
              images:[
                {
                  url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
                }
              ]
            },
            href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
            id:"1418IuVKQPTYqt7QNJ9RXN",
            name:"Maan Meri Jaan"
          }
        },
        {
          track:{
            album:{
              images:[
                {
                  url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
                }
              ]
            },
            href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
            id:"1418IuVKQPTYqt7QNJ9RXN",
            name:"Maan Meri Jaan"
          }
        },
        {
          track:{
            album:{
              images:[
                {
                  url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
                }
              ]
            },
            href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
            id:"1418IuVKQPTYqt7QNJ9RXN",
            name:"Maan Meri Jaan"
          }
        },
        {
          track:{
            album:{
              images:[
                {
                  url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
                }
              ]
            },
            href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
            id:"1418IuVKQPTYqt7QNJ9RXN",
            name:"Maan Meri Jaan"
          }
        },
      ]
    }
  return (
    <div className="flex justify-center">
    <div style={{maxWidth:"800px"}}>
      <div className='flex flex-col justify-center items-center'>
      <img src={playlistDetails.images[0].url} height={"50vh"}  alt="artist" /></div>
    {playlist && playlist.items.map((song)=> (
      <GetSongs key={song.track.name} song={song.track} />
    ))}
    </div>
    </div>
  )
}

export default Playlist