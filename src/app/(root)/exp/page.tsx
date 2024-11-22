'use client'
import React, { useState } from 'react'

function page() {

    const handleSubmit =()=>{
        console.log(formVal);
    }
    

    const [formVal,setFormVal] = useState({
        email:"",
        name:""
    }) 

    const handelChanage =(e)=>{
        const {name, value} = e.target
        setFormVal({
            ...formVal,
            [name]:value
        })
    }
    

  return (
    <div>
      <form>
            <input name="email" onChange={e=>handelChanage(e)}/>
            <input name="name" onChange={e=>handelChanage(e)}/>
            <button onClick={handleSubmit} type='button'>Submit</button>
      </form>
    </div>
  )
}

export default page
