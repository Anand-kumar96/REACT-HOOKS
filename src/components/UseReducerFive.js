import React,{useReducer} from 'react'

const initialState={ 
firstCounter:0
};
const reducer=(state,action)=>{
    switch(action.type){

    case 'increment': return {...state,firstCounter:state.firstCounter + action.value}
    case 'decrement': return {...state,firstCounter:state.firstCounter - action.value}
    case 'reset': return initialState
    default: return state
      }
}
const UseReducerFive=()=> {
    const[count,dispatch]=useReducer(reducer,initialState) // step 1-->this initialState -->is state for reducer 
    const[countTwo,dispatchTwo]=useReducer(reducer,initialState)
  return (
    <>
    <span>first Counter: {count.firstCounter}</span>
    <br/>
    <br/>
    <button onClick={()=>dispatch({type:'increment',value:1})}>Increase</button>
    <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrease</button>
    <button onClick={()=>dispatch({type:'increment',value:5})}>Increase 5</button>
    <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrease 5</button>
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    <br/>
    <hr/>
    <span>second Counter: {countTwo.firstCounter}</span>
    <br/>
    <button onClick={()=>dispatchTwo({type:'increment',value:1})}>Increase</button>
    <button onClick={()=>dispatchTwo({type:'decrement',value:1})}>Decrease</button>
    <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>
    </>
  )
}

export default UseReducerFive
 /*type and value are object key
 type,value-->action
 state-->initial state and how it increase
  */ 