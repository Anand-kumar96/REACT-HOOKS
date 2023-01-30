import React from 'react'
import {useState,useEffect} from 'react'
const UseEffectHookConditional=()=> {
    const[count,setCount]=useState(0);

    // case 1-->useEffect run on each render

    // useEffect(()=>{
    //  document.title=`count change to ${count}`
    // })

       // case 2-->useEffect only on first render

    //    useEffect(()=>{
    //     document.title=`count change to ${count}`
    //    },[])


     // case 3-->useEffect run on first render and anytime when count change
     useEffect(()=>{
        if(count%2===0) {
            document.title=`count change to ${count}`
        }
        
       },[count])

  return (
    <>
    <h1>count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>increase Count</button>
    </>
  )
}

export default UseEffectHookConditional