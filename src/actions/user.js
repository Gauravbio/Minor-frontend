import axios from 'axios';
export const signup=(email,password)=>async (dispatch)=> {
    try {
        dispatch({
            type:"SIGNUP_REQUEST"
        });

        const {data}=await axios.post(`https://minor-backend.vercel.app/user/signup`,{email,password},{
            headers:{
                "Content-type":"application/json"
            }
        });

        document.cookie=data?.token;
        dispatch({
            type:"SIGNUP_SUCCESS",
            payload:data
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type:"SIGNUP_FAILURE",
            payload:error.response.data.message
        })
    }
}

export const login =(email,password)=> async (dispatch)=>{
    try {
        dispatch({
            type:"LOGIN_REQUEST"
        });

        const {data}=await axios.post(`https://minor-backend.vercel.app/user/login`,{email,password},{
            headers:{
                "Content-type":"application/json"
            }
        });

        dispatch({
            type:"LOGIN_SUCCESS",
            payload:data
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type:"SIGNUP_FAILURE",
            payload:error.response.data.message
        })
    }
}