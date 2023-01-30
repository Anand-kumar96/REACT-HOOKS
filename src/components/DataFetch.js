import axios from 'axios';
import React,{useState,useEffect} from 'react'

const DataFetch=()=> {
  const[newId,setId]=useState(1);
  const[posts,setPosts]=useState([]);
  const[idFromButtonClick,setFromButtonClick]=useState(1);
  const handleClick=()=>{
    setFromButtonClick(newId);
  }
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts") 
    .then((response)=> {
     const data=response.data;
      const id=data[idFromButtonClick-1].id;
      console.log(id)
      const url=`https://jsonplaceholder.typicode.com/posts/${id}`
     
    return axios.get(url) 
    .then((newResponse)=>{
      console.log(newResponse.data)
      setPosts([...posts,newResponse.data])
    })
    })
    .catch((error)=>console.log(error))
  },[idFromButtonClick])
  return (
    <>
   <div>
   <div className='input'>
   <label>Enter id : </label>
    <input type="text" value={newId} onChange={(e)=>setId(e.target.value)}/>
    <button onClick={handleClick} style={{margin:"10px"}}>Fetch Id</button>
   </div>
    <ul style={{listStyleType:"none"}}>
     <div>{posts.map(post=>(
      <li style={{backgroundColor:"rgb(146, 235, 235)" , width:"93vw", padding:"10px",borderRadius: "10px",margin:"10px 0"}} key={post.id}>Id: {post.id} <br/> post: {post.title} <br/> body: {post.body} <hr/></li>
    ))}</div>
    {/* <li>Id: {posts.id} <br/> post: {posts.title} <br/> body: {posts.body} </li> */}
   </ul>
   </div>
    </>
   
  )
}
 
export default DataFetch