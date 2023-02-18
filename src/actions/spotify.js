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
        "X-RapidAPI-Key": "3758bfef8cmsh12ef36d0d8d36f4p1145bdjsn68fe17a6896d",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
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
        "X-RapidAPI-Key": "3758bfef8cmsh12ef36d0d8d36f4p1145bdjsn68fe17a6896d",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
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
        "X-RapidAPI-Key": "3758bfef8cmsh12ef36d0d8d36f4p1145bdjsn68fe17a6896d",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
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

    dispatch({type:"SONG_PLAYING_SUCCESS",payload:song})
  } catch (error) {
    console.log(error)
  }
}
