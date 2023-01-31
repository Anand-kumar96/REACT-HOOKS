import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading:true,
    error:'',
    post:{}
    }
    const reducer =(state,action) =>{
        switch(action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading:false,
                    error:'',
                    post:action.payLoad
                }
            case 'FETCH_ERROR' :
            return {
                loading:false,
                error:'something Error',
                post:{}
            }
            default : return state;
        }
    }
const DataFetchingTwo =()=> {
const[state,dispatch]=useReducer(reducer,initialState);
        useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${Math.floor(Math.random()*101)}`)
            .then(response=>{
              dispatch({type:'FETCH_SUCCESS', payLoad:response.data})
            })
            .catch(error=>{
                dispatch({type:'FETCH_ERROR'})
            })
        
        }, [])

  return (
  <>
    <div>
    {state.loading ?'loading' : state.post.title}
    {state.error ? state.error : null}
    </div>
  </>
  )
}

export default DataFetchingTwo