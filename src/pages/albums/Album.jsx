import React from 'react'
import { useParams } from 'react-router-dom'

const Album = () => {
    const {id}=useParams();
  return (
    <div>{id}</div>
  )
}

export default Album