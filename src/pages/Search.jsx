import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImSearch } from "react-icons/im";
import { searchAction } from "../actions/spotify";
import Searchmap from "./songs/Searchmap";
import scan from "../assets/scanning.gif";
import SearchPlaylist from './playlists/SearchPlaylist';

const Search = () => {
  const [query, setQuery] = useState("");
  const { emotion, emotionLoading } = useSelector((state) => state.songs);

  const dispatch = useDispatch();
  const { searchResult } = useSelector((state) => state.songs);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAction(query));
  };

  useEffect(()=> {
    if(emotion) {
      setQuery(emotion.output+" hindi songs");
      console.log(query)
    }
    
  },[emotion,dispatch,query])

  const handleChange = (e) => {
   setQuery(e.target.value)
  };

  // const searchResult={
  //   items:[
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //     {
  //       data:{
  //         uri:"spotify:track:0So2sgVa8aJiARPl2P29u2",
  //         id:"0So2sgVa8aJiARPl2P29u2",
  //         name:"Pope Is a Rockstar",
  //       albumOfTrack:{
  //         uri:"spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
  //         name:"SALES LP",
  //         coverArt:{
  //           sources:[
  //             {url:"https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa"}
  //           ]
  //         }
  //       }
  //       }
  //     },
  //   ]
  // }

  return emotionLoading ? (
    <div className="p-36 flex flex-col items-center mx-auto">
      <img alt="loading" className="h-72 w-72" src={scan} />
      <h1 className="text-2xl font-weight:700  animate-pulse">
        Image is sent for detection
      </h1>
    </div>
  ) : (
    
    <div className="scrollbar-hide ">
      <form
        class="flex items-center justify-center pt-4 sticky"
        onSubmit={handleSubmit}
      >
        <div class="flex w-full m-5 md:m-8 lg:m-10 ">
          <input
          value={query}
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={emotion ? emotion.output :`What do you want to listen?`}
            onChange={handleChange}
          />
          <button
            onClick={() => {
              console.log("Button Clicked");
            }}
            type="submit"
            class="p-2.5 text-sm font-medium text-black hover:translate-x-1 rounded-lg ml-[-50px]"
          >
            <ImSearch className="w-5 h-5" />
          </button>
        </div>
      </form>
      <div className="flex justify-center mx-auto">
        <div  className="flex flex-col">
          {
            searchResult && searchResult.playlists.items.map((playlist)=> (
              <SearchPlaylist key={playlist.data.name} playlist={playlist.data} />
            ))
          }
          {searchResult &&
            searchResult.tracks.items.map((song) => (
              <Searchmap
                song={song.data}
              />
            ))}
        </div>
      </div>
    </div>
    
  );
};

export default Search;
