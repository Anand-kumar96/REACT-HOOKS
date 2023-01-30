import React from 'react'
import { useState,useEffect } from 'react'
// componentDidMount using useEffect
const HookMouse=()=> {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);

    const logMousePosition=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
        console.log("mouse Run");
    }
    useEffect(()=>{
        console.log("useEffect Run");
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            window.removeEventListener('mousemove',logMousePosition) // useEffect cleanUp
        }
    },[])
  return (
    <div>Hook X-{x} Y-{y}</div>
  )
}

export default HookMouse