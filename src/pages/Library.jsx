import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Library = () => {
  const {loading}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <div>Library</div>
  )
}

export default Library