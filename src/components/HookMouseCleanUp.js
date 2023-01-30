import React from 'react'
import {useState,useEffect} from 'react'
import HookMouse from './HookMouse';
const HookMouseCleanUp=()=> {
    const[display,setDisplay]=useState(true);
  return (
<>
    <button onClick={()=>setDisplay(!display)}>Toggle button</button>
    {display && <HookMouse/>}
</>
  )
}

export default HookMouseCleanUp