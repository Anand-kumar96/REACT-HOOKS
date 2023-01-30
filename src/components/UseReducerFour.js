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
const UseReducerFour=()=> {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <>
    <h1>Counter1: {count.firstCount}</h1>
    <button onClick={()=>dispatch({type: 'increment'})}>Increase</button>
    <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    <button onClick={()=>dispatch({type: 'decrement'})}>Decrease</button>
    <hr/>
    <h1>Counter2: {countTwo.firstCount}</h1>
    <button onClick={()=>dispatchTwo({type: 'increment'})}>Increase2</button>
    <button onClick={()=>dispatchTwo({type: 'reset'})}>Reset2</button>
    <button onClick={()=>dispatchTwo({type: 'decrement'})}>Decrease2</button>
    </>
  )
}

export default UseReducerFour