import React from 'react'
import { useState } from 'react'
const HookCounterThree=()=> {
const[name,setName]=useState({firstName:'',lastName:'',age: ''})
  return (
    <>
    <form onSubmit={(e)=>{
        e.preventDefault();
          alert(`your first Name is: ${name.firstName} 
          your Last Name is:${name.lastName} 
          your  Age is:${name.age}`) 
    }}>
    <label>firstName:</label>
    <input type="text" 
    placeholder='Enter your first name' 
    value={name.firstName}
    onChange={(e)=>setName({...name,firstName:e.target.value})}/>

    <label>lastName: </label>
    <input type="text" 
    placeholder='Enter your last name' 
    value={name.lastName}
    onChange={(e)=>setName({...name,lastName:e.target.value})}/>
    <br/>

    <label>Age: </label>
    <input type="number"
    placeholder='Enter your age' 
    value={name.age}
    onChange={(e)=>setName({...name,age:e.target.value})}/>
    <button type='submit'>Submit</button>
    </form>
    
    <h1>{`your first Name is: ${name.firstName}`}</h1>
    <h1>{`your Last  Name is:${name.lastName}`}</h1>
    <h1>{`your Age is :${name.age}`}</h1>
    
    </>
  )
}

export default HookCounterThree