import React from 'react'
import { useState,useEffect } from 'react'
const HookCounterOne=()=> {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`count ${count}`
    })
  return (
    <>
    <button onClick={()=>setCount(count+1)}>Increase Count</button>
    <h1>{count}</h1>
    </>
  )
}

export default HookCounterOne