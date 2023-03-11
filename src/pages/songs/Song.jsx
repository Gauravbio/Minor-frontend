import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { playerAction } from '../../actions/spotify';
import axios from 'axios'

const Song = ({id}) => {

  const dispatch=useDispatch();
  const [song, setsong] = useState(null)
  
  useEffect(()=> {
    const songRequest=async (id)=> {
      const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {ids: id},
        headers: {
          'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };
  
      const {data}=await axios.request(options);
      setsong(data.tracks[0]);
    }
    songRequest(id)
  },[dispatch,id])

   const handlePlayer=()=> {
    dispatch(playerAction(song));
   }
  
  // const song={
  //   album:{
  //     images:[
  //       {
  //         url:"https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1"
  //       }
  //     ]
  //   },
  //   preview_url:"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832",
  //   name:"In Control (feat. Selin)"
  // }

  return (
    song && <div class="flex border-b border-gray-800 hover:bg-gray-800 items-center cursor-pointer"  style={{height:"70px"}} onClick={handlePlayer}>
      <div class="p-3 w-20  flex-shrink-0" >
        <img src={song.album.images[0].url} alt="song"/>
      </div>
      <div class="p-3 w-full flex-shrink-1" style={{fontSize:"20px",fontWeight:"bold"}} >{song.name > 15 ? song.name.slice(0,12)+"...":song.name}</div>
      
      <div class="p-3 w-12 flex-shrink-0 text-right">5:35</div>
      </div>
  )
}

export default Song