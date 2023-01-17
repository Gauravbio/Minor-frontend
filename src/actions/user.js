import axios from 'axios';

const NODE_APP="http://localhost:4000"

export const signup=(email,password)=>async (dispatch)=> {
    try {
        dispatch({
            type:"SIGNUP_REQUEST"
        });

        const {data}=await axios.post(`${NODE_APP}/user/signup`,{email,password},{
            headers:{
                "Content-type":"application/json"
            }
        });

        document.cookie=data?.token;
        dispatch({
            type:"SIGNUP_SUCCESS",
            payload:data.newUser
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type:"SIGNUP_FAILURE",
            payload:error.response.data.message
        })
    }
}