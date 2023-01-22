import React from 'react'
import { useEffect } from 'react'
import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'

const Home = () => {
  const {message,error,loading}=useSelector(state => state.user)
  const alert=useAlert()
  const dispatch=useDispatch();

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


  return (
    loading ? <Loader className="h-screen" /> :
    (<div>Home</div>)
  )
}

export default Home