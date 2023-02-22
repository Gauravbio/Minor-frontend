import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import WebCam from 'react-webcam';

const Home = () => {
  const {message,error,loading}=useSelector(state => state.user)
  const alert=useAlert()
  let video=useRef(null);
  const dispatch=useDispatch();

  const [url, setUrl] = useState(null)

  useEffect(()=> {
    if(error){
      alert.error(error)
      dispatch({type:"CLEAR_ERROR"})
    }
    if(message) {
      alert.success(message)
      dispatch({type:"CLEAR_MESSAGE"})
    }
  },[dispatch,error,message,alert])

  const onUserMedia=(e)=> console.log(e);

  const takeImage =()=> {
    const image=video.current.getScreenshot();
    console.log(image,video.current)
    setUrl(image);
  }


  return (
    loading ? <Loader className="h-screen" /> :
    (<div  className='flex justify-center my-0'>
      <div className='m-0 p-0 flex flex-col justify-around cursor-pointer relative' style={{maxWidth:'800px'}}>
      <WebCam className='w-full' style={{height:"90vh"}}
      audio={false} ref={video} screenshotFormat="image/png" 
      />
      <div className='w-full flex fixed bottom-5 left-1/3 right-1/3 text-center'>
      <button className='w-1/3  text-white rounded-lg bg-primary-600 hover:bg-primary-700 px-2 py-2.5 text-center text-lg' onClick={takeImage}>fetch songs</button></div>
      </div>
      {
        url && <img src={url} alt="img" />
      }
    </div>)
  )
}

export default Home