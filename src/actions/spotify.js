import axios from "axios";

export const topSongs = () => async (dispatch) => {
  try {
    dispatch({ type: "TOP_20_REQUEST" });
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: "Top 20 bollywood",
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
    'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
    };

    const { data } = await axios.request(options);
    dispatch({ type: "TOP_20_SUCCESS", payload: data });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: "TOP_20_FAILURE", payload: error.response.data.message });
  }
};

export const playlistDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PLAYLIST_DETAILS_REQUEST" });

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
    console.log(data);
    dispatch({type:"PLAYLIST_DETAILS_SUCCESS",payload:data})
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: "PLAYLIST_DETAILS_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const fetchPlaylistSongs = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PLAYLIST_SONGS_REQUEST" });

    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/playlist_tracks/",
      params: { id: id, offset: "0", limit: "50" },
      headers: {
    'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
    };

    const { data } = await axios.request(options);
    dispatch({ type: "PLAYLIST_SONGS_SUCCESS", payload: data });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: "PLAYLIST_SONGS_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export const playerAction=(song)=>async (dispatch)=> {
  try {
    dispatch({type:"SONG_PLAYING_REQUEST"});
    console.log(song)

    if(!song.preview_url) {
      const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/tracks/',
      params: {ids: song},
      headers: {
    'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
    };
    const {data}=await axios.request(options);
    song=data.tracks[0];
  }

    dispatch({type:"SONG_PLAYING_SUCCESS",payload:song})
  } catch (error) {
    console.log(error)
  }
}

export const albumAction=(id)=> async (dispatch)=> {
  try {
    dispatch({type:"ALBUM_DETAILS_REQUEST"});

    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/albums/',
      params: {ids: id},
      headers: {
    'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
    };

    const {data}=await axios.request(options);
    console.log(data);
    dispatch({type:"ALBUM_DETAILS_SUCCESS",payload:data});
  } catch (error) {
    dispatch({type:"ALBUM_DETAILS_FAILURE",payload:error.response.data.message})
  }
}

export const songAction=(id)=> async (dispatch)=> {
  try {
    dispatch({type:"TRACK_DETAILS_REQUEST"});

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
    dispatch({type:"TRACK_DETAILS_SUCCESS",payload: data.tracks[0]});
  } catch (error) {
    dispatch({type:"TRACK_DETAILS_FAILURE",payload:error.response.data.message})
  }
}


export const searchAction=(query)=>async (dispatch)=> {
  try {
    dispatch({
      type:"SEARCH_REQUEST"
    });

    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: query,
        type: "multi",
        offset: "0",
        limit: "20",
      },
      headers: {
    'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
    };
    const {data}=await axios.request(options);

    dispatch({
      type:"SEARCH_SUCCESS",
      payload:data
    })
  } catch (error) {
      console.log(error.message);
      dispatch({
        type:"SEARCH_FAILURE",
        payload:error.message
      })
  }
}