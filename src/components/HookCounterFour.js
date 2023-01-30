import React from 'react'
import { useState } from 'react'
const HookCounterFour=()=> {
    const[items,setItems]=useState([]);
    const addNumber=()=>{
        const lastItem=items.length;
        setItems([...items,lastItem+1]);
    }
  return (
    <>
    <ul>
    <button onClick={addNumber}>Add Number</button>
    {items.map((item,index)=>(<li key={index+1}>{item}</li>))}
    </ul>
    
    </>
  )
}

export default HookCounterFour