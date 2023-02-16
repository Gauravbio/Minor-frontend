import axios from 'axios';

export const topSongs=()=>async (dispatch)=> {
    try {
        dispatch({type:"TOP_20_REQUEST"})
        const options = {
          method: 'GET',
          url: 'https://spotify23.p.rapidapi.com/search/',
          params: {
            q: 'Top 20 bollywood',
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
          },
          headers: {
            'X-RapidAPI-Key': '3758bfef8cmsh12ef36d0d8d36f4p1145bdjsn68fe17a6896d',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };

          const {data}=await axios.request(options);

          console.log(data);
          dispatch({type:"TOP_20_SUCCESS",payload:data})
    } catch (error) {
        console.log(error.response.data.message)
        dispatch({type:"TOP_20_FAILURE",payload:error.response.data.message})
    }


}