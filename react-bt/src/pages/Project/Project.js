import React from 'react'
import { useParams } from 'react-router-dom'

export default function Project() {
  const {id} = useParams()
  return (
    <>
  
    <h2>Project No : {id}</h2>
    </>
  )
}
