import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import GetSongs from '../songs/GetSongs';
import {fetchPlaylistSongs} from "../../actions/spotify"
import axios from "axios";

const Playlist = () => {
    const {id}=useParams();
    const [image, setImage] = useState("https://i.scdn.co/image/ab67706f00000003f1f02761d4ac4a745a6fbaa2")
    
    
    const dispatch=useDispatch();
    const {playlist}=useSelector(state=> state.songs)
    useEffect(()=> {
      dispatch(fetchPlaylistSongs(id))
      const playlistImage=async (id)=> {
        const options = {
          method: "GET",
          url: "https://spotify23.p.rapidapi.com/playlist/",
          params: { id: id },
          headers: {
            'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };
    
        const { data } = await axios.request(options);
        setImage(data.images[0].url)
      }
      playlistImage(id)
    },[dispatch,id])


    // const playlist={
    //   items:[
    //     {
    //       track:{
    //         album:{
    //           images:[
    //             {
    //               url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
    //             }
    //           ]
    //         },
    //         href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
    //         id:"1418IuVKQPTYqt7QNJ9RXN",
    //         name:"Maan Meri Jaan",
    //         preview_url:"https://p.scdn.co/mp3-preview/3cc8ed2b046ef5d8e1a14ff5d2e3ccf8c1609030?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    //       }
    //     },
    //     {
    //       track:{
    //         album:{
    //           images:[
    //             {
    //               url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
    //             }
    //           ]
    //         },
    //         href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
    //         id:"1418IuVKQPTYqt7QNJ9RXN",
    //         name:"Maan Meri Jaan",
    //         preview_url:"https://p.scdn.co/mp3-preview/3cc8ed2b046ef5d8e1a14ff5d2e3ccf8c1609030?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    //       }
    //     },
    //     {
    //       track:{
    //         album:{
    //           images:[
    //             {
    //               url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
    //             }
    //           ]
    //         },
    //         href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
    //         id:"1418IuVKQPTYqt7QNJ9RXN",
    //         name:"Maan Meri Jaan",
    //         preview_url:"https://p.scdn.co/mp3-preview/3cc8ed2b046ef5d8e1a14ff5d2e3ccf8c1609030?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    //       }
    //     },
    //     {
    //       track:{
    //         album:{
    //           images:[
    //             {
    //               url:"https://i.scdn.co/image/ab67616d0000b27337f65266754703fd20d29854"
    //             }
    //           ]
    //         },
    //         href:"https://api.spotify.com/v1/tracks/1418IuVKQPTYqt7QNJ9RXN",
    //         id:"1418IuVKQPTYqt7QNJ9RXN",
    //         name:"Maan Meri Jaan",
    //         preview_url:"https://p.scdn.co/mp3-preview/3cc8ed2b046ef5d8e1a14ff5d2e3ccf8c1609030?cid=d8a5ed958d274c2e8ee717e6a4b0971d"
    //       }
    //     },
    //   ]
    // }
  return (
    playlist && <div className="flex justify-center">
    <div style={{maxWidth:"800px"}}>
      <div className='flex flex-col justify-center items-center'>
      <img src={image} height={"50vh"}  alt="artist" /></div>
    {playlist && playlist.items.map((song)=> (
      <GetSongs key={song.track.name} song={song.track}  />
    ))}
    </div>
    </div>
  )
}

export default Playlist