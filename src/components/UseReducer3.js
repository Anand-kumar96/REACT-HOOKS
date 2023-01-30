import React, { useReducer } from 'react'


const initialState=0;
const initialState2=10;
const reducer=(state,action)=>{
    switch(action.type) {
        case 'INCREASE':return state+ action.value;
        case 'DECREASE':return state>0 ? state-action.value : state; // restrict to go below initialState 0
        case 'RESET':return initialState;
        case 'RESET2':return initialState2;
        default:return state;
    }
}

const UseReducer3=()=> {
    const[state,dispatch]=useReducer(reducer,initialState);
    const[state2,dispatch2]=useReducer(reducer,initialState2);

  return (
   <>
   <h1>{state}</h1>
   <button onClick={()=>dispatch({type:'INCREASE',value:1})}>Increase</button>
   <button onClick={()=>dispatch({type:'DECREASE',value:1})}>Decrease</button>
   <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
   <br/>
   <h1>{state2}</h1>
   <button onClick={()=>dispatch2({type:'INCREASE',value:2})}>Increase2</button>
   <button onClick={()=>dispatch2({type:'DECREASE',value:2})}>Decrease2</button>
   <button onClick={()=>dispatch2({type:'RESET2'})}>Reset2</button>
   </>
  )
}

export default UseReducer3

//value-->payload
// state-->i am taking count
// action is object so we sending all action in dispatch as object
//action type always String 