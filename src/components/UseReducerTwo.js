import React, { useReducer } from 'react'

const initialState={
    firstCount:0
};
const reducer=(state,action)=>{
   switch(action.type) {
    case 'increment': return {firstCount:state.firstCount+1};
    case 'decrement': return {firstCount:state.firstCount-1};
    case 'reset': return initialState;
    default:return state;
   }
}
const UseReducerTwo=()=> {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <h1>{count.firstCount}</h1>
    <button onClick={()=>dispatch({type: 'increment'})}>Increase</button>
    <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    <button onClick={()=>dispatch({type: 'decrement'})}>Decrease</button>
    </>
  )
}

export default UseReducerTwo