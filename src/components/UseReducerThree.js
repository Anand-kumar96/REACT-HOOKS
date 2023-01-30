import React,{useReducer} from 'react'

const initialState={ 
firstCounter:0,
secondCounter:10
};
const reducer=(state,action)=>{
    switch(action.type){

    case 'increment': return {...state,firstCounter:state.firstCounter + action.value}
    case 'decrement': return {...state,firstCounter:state.firstCounter - action.value}

    case 'increment2': return {...state,secondCounter:state.secondCounter + action.value}
    case 'decrement2': return {...state,secondCounter:state.secondCounter - action.value}
    case 'reset': return initialState
    default: return state
      }
}
const UseReducerThree=()=> {
    const[count,dispatch]=useReducer(reducer,initialState) // step 1-->this initialState -->is state for reducer 
  return (
    <>
    <span>first Counter: {count.firstCounter}</span>
    <br/>
    <br/>
    <button onClick={()=>dispatch({type:'increment',value:1})}>Increase</button>
    <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrease</button>
    <button onClick={()=>dispatch({type:'increment',value:5})}>Increase 5</button>
    <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrease 5</button>
    <br/>
    <hr/>
    <span>second Counter: {count.secondCounter}</span>
    <br/>
    <button onClick={()=>dispatch({type:'increment2',value:1})}>Increase</button>
    <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrease</button>
    <br/>
    <br/>
    <hr/>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}

export default UseReducerThree
 /*type and value are object key
 type,value-->action
 state-->initial state and how it increase
  */ 