'use server'
import React from "react";
const fetchTodoData =async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const resVal = await res.json()
    // console.log(resVal);
    
    return resVal;
    
}

export default async function Todo() {
   const data:any =await fetchTodoData()
    console.log(data);
    
//    useEffect(()=>{

//    },[])
    
  return (
    <div>

        <div >
            {data.map(el=>
            <h2 key={el._id}>Title: {el.title}</h2>
        )}
        </div>
      
    </div>
  )
}