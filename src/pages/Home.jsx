import React from 'react'
import { useEffect } from 'react'
import {useAlert} from 'react-alert'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
  const {message,error}=useSelector(state => state.user)
  const alert=useAlert()
  const dispatch=useDispatch();

  // useEffect(()=> {
  //   if(error){
  //     alert.error(error)
  //     dispatch({type:"CLEAR_ERROR"})
  //   }
  //   if(message) {
  //     alert.success({type:"CLEAR_MESSAGE"})
  //   }
  // },[dispatch,error,message,alert])


  return (
    <div>Home</div>
  )
}

export default Home