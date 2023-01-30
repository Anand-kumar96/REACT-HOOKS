import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
   switch(action) {
    case 'increment': return state+1;
    case 'decrement': return state-1;  
    case 'reset': return initialState;
    default:return state;
   }
}
const UseReducerOne=()=> {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch('increment')}>Increase</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
    <button onClick={()=>dispatch('decrement')}>Decrease</button>
    </>
  )
}

export default UseReducerOne