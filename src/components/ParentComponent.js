import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

const ParentComponent=()=> {
    const[age,setAge]=useState(25);
    const[salary,setSalary]=useState(50000);

    const incrementAge=useCallback(()=>{
        setAge((prevAge)=>prevAge+1)
    },[age])

    const incrementSalary=useCallback(()=>{
        setSalary((prevSalary)=>prevSalary+1000)
    },[salary])

  return (
    <>
    <Title/>
    <Count text={'Age'} count={age}/>
   <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text={'Salary'} count={salary}/>
    <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default ParentComponent

// after click any button all are render each time so 
// to restrict we use React.memo after exporting button and count-->React.memo() if any state change then component render
// after that dependent function also run to restrict it we use useCallBack hook in method which share common method
//in multiple component