import React from 'react'
import { useState } from 'react'
const HookCounterTwo=()=> {
    const[count,setCount]=useState(0);
    const incrementFive=()=>{
        setCount((prevCount)=>prevCount+5)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increase</button>
    <button onClick={()=>setCount((prevCount)=>0)}>Reset</button>
    <button  onClick={ ()=> count >0 && setCount((prevCount)=>prevCount-1)}>Decrease</button>
    <button  onClick={incrementFive}>increment5</button>
    </>
  )
} 

export default HookCounterTwo