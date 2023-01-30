import React from 'react'
import { useState } from 'react'

const HookCount=()=> {
const[count,setCount]=useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button 
        onClick={()=>setCount(count+1)}>
        increase Count</button>
    </div>
  )
}

export default HookCount