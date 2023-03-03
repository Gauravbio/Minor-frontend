import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topSongs } from '../actions/spotify'
import Loader from '../components/Loader'
import TopAlbums from './albums/TopAlbums'
import TopPlaylists from './playlists/TopPlaylists'
import Recent from './Recent'
import Footer from "../components/Footer"

const Dashboard = () => {
  const {loading}=useSelector(state=> state.user)
  const dispatch=useDispatch();
  const {top_20}=useSelector(state=> state.songs)
  const {user}=useSelector(state=> state.user);
  useEffect(()=> {
    dispatch(topSongs())
  },[dispatch])

//   const user={
//     recents:
//     [
//     {album:{
//       images:[
//         {
//           url:"https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1"
//         }
//       ]
//     },
//     preview_url:"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832",
//     name:"In Control (feat. Selin)"},
//     {album:{
//       images:[
//         {
//           url:"https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1"
//         }
//       ]
//     },
//     preview_url:"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832",
//     name:"In Control (feat. Selin)"},
//     {album:{
//       images:[
//         {
//           url:"https://i.scdn.co/image/ab67616d0000b273fa258529452f4ed34cc961b1"
//         }
//       ]
//     },
//     preview_url:"https://p.scdn.co/mp3-preview/315b151078df729934712ed1cc21e11506c64017?cid=f6a40776580943a7bc5173125a1e8832",
//     name:"In Control (feat. Selin)"},
//   ]
// }

//   const top_20={
//     artists:{
//       items:[
//         {
//           data:{
//             uri:"spotify:artist:6abfAcMcC3hYJcaxzLeiCW",
//             profile:{
//               name:"All India Radio"
//             },
//             visuals:{
//               avatarImage:{
//                 sources:[
//                   {
//                     url:"https://i.scdn.co/image/ab6761610000e5ebb7c3a9eadee4624245210c37"
//                   }
//                 ]
//               }
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:artist:6abfAcMcC3hYJcaxzLeiCW",
//             profile:{
//               name:"All India Radio"
//             },
//             visuals:{
//               avatarImage:{
//                 sources:[
//                   {
//                     url:"https://i.scdn.co/image/ab6761610000e5ebb7c3a9eadee4624245210c37"
//                   }
//                 ]
//               }
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:artist:6abfAcMcC3hYJcaxzLeiCW",
//             profile:{
//               name:"All India Radio"
//             },
//             visuals:{
//               avatarImage:{
//                 sources:[
//                   {
//                     url:"https://i.scdn.co/image/ab6761610000e5ebb7c3a9eadee4624245210c37"
//                   }
//                 ]
//               }
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:artist:6abfAcMcC3hYJcaxzLeiCW",
//             profile:{
//               name:"All India Radio"
//             },
//             visuals:{
//               avatarImage:{
//                 sources:[
//                   {
//                     url:"https://i.scdn.co/image/ab6761610000e5ebb7c3a9eadee4624245210c37"
//                   }
//                 ]
//               }
//             }
//           }
//         },
//       ]
//     },
//     albums:{
//       items:[
//         {
//           data:{
//             uri:"spotify:album:0Wtm0w4UXe2mqM0Ojbefg6",
//             name:"Top 20 - Bollywood Dance Songs 2018",
//             coverArt:{
//               sources:[
//                 {
//                   url:"https://i.scdn.co/image/ab67616d00001e02085edcb32133e5a37e8907d2",
//                   width:300,
//                   height:300
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:album:0Wtm0w4UXe2mqM0Ojbefg6",
//             name:"Top 20 - Bollywood Dance Songs 2018",
//             coverArt:{
//               sources:[
//                 {
//                   url:"https://i.scdn.co/image/ab67616d00001e02085edcb32133e5a37e8907d2",
//                   width:300,
//                   height:300
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:album:0Wtm0w4UXe2mqM0Ojbefg6",
//             name:"Top 20 - Bollywood Dance Songs 2018",
//             coverArt:{
//               sources:[
//                 {
//                   url:"https://i.scdn.co/image/ab67616d00001e02085edcb32133e5a37e8907d2",
//                   width:300,
//                   height:300
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:album:0Wtm0w4UXe2mqM0Ojbefg6",
//             name:"Top 20 - Bollywood Dance Songs 2018",
//             coverArt:{
//               sources:[
//                 {
//                   url:"https://i.scdn.co/image/ab67616d00001e02085edcb32133e5a37e8907d2",
//                   width:300,
//                   height:300
//                 }
//               ]
//             }
//           }
//         },
//       ]
//     },
//     playlists:{
//       items:[
//         {
//           data:{
//             uri:"spotify:playlist:3qF07OWQ5nfBJnHLOu0YyD",
//             name:"Bollywood Top Hits 2023",
//             description:"",
//             images:{
//               items:[
//                 {
//                   sources:[
//                     {
//                       url:"https://i.scdn.co/image/ab67706c0000da84628c1802557963c727d76e70",
//                       width:null,
//                       height:null
//                     }
//                   ]
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:playlist:3qF07OWQ5nfBJnHLOu0YyD",
//             name:"Bollywood Top Hits 2023",
//             description:"",
//             images:{
//               items:[
//                 {
//                   sources:[
//                     {
//                       url:"https://i.scdn.co/image/ab67706c0000da84628c1802557963c727d76e70",
//                       width:null,
//                       height:null
//                     }
//                   ]
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:playlist:3qF07OWQ5nfBJnHLOu0YyD",
//             name:"Bollywood Top Hits 2023",
//             description:"",
//             images:{
//               items:[
//                 {
//                   sources:[
//                     {
//                       url:"https://i.scdn.co/image/ab67706c0000da84628c1802557963c727d76e70",
//                       width:null,
//                       height:null
//                     }
//                   ]
//                 }
//               ]
//             }
//           }
//         },
//         {
//           data:{
//             uri:"spotify:playlist:3qF07OWQ5nfBJnHLOu0YyD",
//             name:"Bollywood Top Hits 2023",
//             description:"",
//             images:{
//               items:[
//                 {
//                   sources:[
//                     {
//                       url:"https://i.scdn.co/image/ab67706c0000da84628c1802557963c727d76e70",
//                       width:null,
//                       height:null
//                     }
//                   ]
//                 }
//               ]
//             }
//           }
//         }
//       ]
//     }
//   }
  
  return (
    loading ? <Loader className="h-screen" /> :
    <div>
    {/* <div className="flex flex-col bg-white m-auto p-auto">
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
  </div> */}
    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Top Playlists
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            top_20 && top_20.playlists.items.map((playlist)=> (
              <TopPlaylists key={playlist.data.name} playlist={playlist.data} />
            ))
          }
        </div>
      </div>
  </div>


    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Top Albums
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >s
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            top_20 && top_20.albums.items.map((album)=> (
              <TopAlbums key={album.data.name} album={album.data} />
            ))
          }
        </div>
      </div>
  </div>
    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Recently Played
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >s
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            user && user.recents.map((song)=>(
              <Recent song={song}/>
            ))
          }
        </div>
      </div>
  </div>
          <Footer />
  
</div>

  )
}

export default Dashboard