import React, { useContext } from 'react'
import { UserContext,ChannelContext } from '../App'

const UseContext3 =()=> {
    const user=useContext(UserContext);
    const channel=useContext(ChannelContext);
  return (
    <h1>my name is {user} {channel}</h1>
  )
}

export default UseContext3