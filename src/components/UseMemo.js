import React,{useState,useMemo} from 'react'

const UseMemo=()=> {
const[count1,setCount1]=useState(0);
const[count2,setCount2]=useState(0);

const counterOne=()=>{
setCount1(count1+1);
}

const isEven = useMemo(()=>{
    let i=0;
    while(i<2000000000) i++;
    return count1%2===0;
},[count1]);

const counterTwo=()=>{
    setCount2(count2+1);
}
// after this while loop counterTwo performance slow becoz when button 2 click all render so we use useMemo
// after use counter2 run without delay
  return (
   <>
   <div>
   <button onClick={counterOne}>Count One -: {count1}</button>
   <span>{isEven ? 'Even':'Odd'}</span> 
   </div>

   <div>
   <button onClick={counterTwo}>Count Two -: {count2}</button>
   </div>
   </>
  )
}

export default UseMemo

// since returning so call function with ()==>not storing a value
// after useMemo we just call without parenthesis becoz its now stores a value