import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { albumAction } from '../../actions/spotify';
import Song from '../songs/Song';

const Album = () => {
    // const {id}=useParams();
    // const dispatch=useDispatch();
    // const {albumDetails}=useSelector(state=> state.songs);
    // useEffect(()=> {
    //   dispatch(albumAction(id));
    // },[dispatch,id])

    const albumDetails={
      albums:[
      {
        images:[
          {
            url:"https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef"
          }
        ],
        tracks:{
          items:[
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",
              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",
              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",

              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",
              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",
              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
            {
              name:"Makina",
              preview_url:"https://p.scdn.co/mp3-preview/26d19b78d0470a426e3c5c80a0a1ec215f48521e?cid=f6a40776580943a7bc5173125a1e8832",
              id:"5jvhTc0g18kwYQNUJM5C4e"
            },
          ]
        }
      }
    ]}

  return (
    albumDetails && <div className="flex justify-center">
    <div style={{maxWidth:"800px"}}>
      <div className='flex flex-col justify-center items-center'>
      <img src={albumDetails.albums[0].images[0].url} height={"50vh"}  alt="artist" /></div>
    {albumDetails.albums[0].tracks.items.map((song)=> (
      <Song key={song.preview_url} id={song.id}  />
    ))}
    </div>
    </div>
  )
}

export default Album