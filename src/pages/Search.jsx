import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Search = () => {
  const {loading}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <div>Search</div>
  )
}

export default Search