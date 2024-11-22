"use client"

import { formDataSubmit } from '@/app/component/action/formSubmit'
import React, { useActionState } from 'react'


function page() {

    const INITIAL_STAGE = {
        data:{
            email:"",
            password:""
        }
    }

    const [formState, formAction] = useActionState(formDataSubmit,INITIAL_STAGE)

    console.log(formState);
    
  return (
    <div>
      <form action={formAction}>
        <input name="email"/>
        <input name="password"/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default page
