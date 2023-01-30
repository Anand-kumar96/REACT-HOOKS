import React from 'react'
import { useContext } from 'react'
import UseContext3 from './UseContext3'
import { UserContext,ChannelContext } from '../App'

const UseContext2 =()=> {
const user=useContext(UserContext);
const channel=useContext(ChannelContext);
  return (
    <>
    <h1>My full Name is {user} {channel}</h1>
    <div><UseContext3/></div></>
  )
}

export default UseContext2