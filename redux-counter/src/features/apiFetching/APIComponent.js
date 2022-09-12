import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import APIAction from './APIAction'


const APIComponent = () => {
  const dispatch = useDispatch()
  const userList = useSelector( (state)=> state.userList)
  const {loading, users, error}  = userList

  useEffect(()=>{
    dispatch(APIAction())
  }, [dispatch])
  return (
    <div>APIComponent</div>
    
  )
}

export default APIComponent