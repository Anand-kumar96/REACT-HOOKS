import React, { useReducer } from 'react'
const initialState=0;
const initialState2=10;
const reducer=(state,action)=>{
    switch(action.type) {
        case 'INCREASE':return state+1;
        case 'DECREASE':return state-1;
        case 'RESET':return initialState;
        case 'INCREASE2':return state+2;
        case 'DECREASE2':return state-2;
        case 'RESET2':return initialState;
        default:return state;
    }
}

const UseReducer2=()=> {
    const[state,dispatch]=useReducer(reducer,initialState);
    const handleIncrease1=()=>{ dispatch({type:'INCREASE'})}
    const handleDecrease1=()=>{dispatch({type:'DECREASE'})}
    const handleReset1=()=>{dispatch({type:'RESET'})}

    const[state2,dispatch2]=useReducer(reducer,initialState2);
    const handleIncrease2=()=>{dispatch2({type:'INCREASE2'})}
    const handleDecrease2=()=>{dispatch2({type:'DECREASE2'})}
    const handleReset2=()=>{dispatch2({type:'RESET2'})}

  return (
   <>
   <h1>{state}</h1>
   <button onClick={handleIncrease1}>Increase</button>
   <button onClick={handleDecrease1}>Decrease</button>
   <button onClick={handleReset1}>Reset</button>
   <br/>
   <h1>{state2}</h1>
   <button onClick={handleIncrease2}>Increase2</button>
   <button onClick={handleDecrease2}>Decrease2</button>
   <button onClick={handleReset2}>Reset2</button>
   </>
  )
}

export default UseReducer2