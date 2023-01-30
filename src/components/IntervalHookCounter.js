import React ,{useState,useEffect} from 'react'

const IntervalHookCounter = () => {
    const[count,setCount]=useState(0);

   // Common mistake or incorrect useEffect dependency

    // const tick=()=>{
    //     setCount(count+1);
    // }
    // useEffect(()=>{
    //     const interval =setInterval(tick,1000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[])

    // above mistake is that useEffect ignore count changes and all time take initial count=0
    // can do 2 way passing count in [] or using prevState

    // method 1

    // const tick=()=>{
    //     setCount((prevState)=>prevState+1);
    // }
    // useEffect(()=>{
    //     const interval =setInterval(tick,1000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[])

    // method 2
    const tick=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        const interval =setInterval(tick,1000);
        return ()=>{
            clearInterval(interval);
        }
    },[count])

    // function calling in useEffect
    // const tick=()=>{
        
    //     setCount(count+1);
    // }
    // const someProps="hello"
    // useEffect(()=>{
    //     const doSomething=()=>{
    //     console.log(someProps)
    //     }
    //     doSomething();
    //     const interval =setInterval(tick,1000);
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[count,someProps])

  return (
 <h1>timer:<br/><hr/>{count} </h1>
  )
}

export default IntervalHookCounter