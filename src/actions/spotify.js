import axios from 'axios';

export const topSongs=()=>async (dispatch)=> {
    try {
        dispatch({type:"TOP_200_REQUEST"})
        const options = {
            method: 'GET',
            url: 'https://spotify81.p.rapidapi.com/top_200_tracks',
            params: {country: 'IN'},
            headers: {
              'X-RapidAPI-Key': '3758bfef8cmsh12ef36d0d8d36f4p1145bdjsn68fe17a6896d',
              'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
            }
          };

          const {data}=await axios.request(options);

          console.log(data);
          dispatch({type:"TOP_200_SUCCESS",payload:data})
    } catch (error) {
        console.log(error.response.data.message)
        dispatch({type:"TOP_200_FAILURE",payload:error.response.data.message})
    }


}