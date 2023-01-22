import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'

const Dashboard = () => {
  const {loading}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <div>Dashboard</div>
  )
}

export default Dashboard