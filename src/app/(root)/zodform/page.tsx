"use client"

import { formZodSubmit } from '@/app/component/action/formZodSubmit'
import React, { useActionState } from 'react'
import {useForm} from '@conform-to/react'
import {parseWithZod} from "@conform-to/zod"
import formDataZod from '@/app/component/DataValidation/formDataZod'



function page() {

    
    const [formState,formAction] = useActionState(formZodSubmit,undefined)

    const [form,field] = useForm({
        lastResult:formState,
        onValidate({formData}) {
            return parseWithZod(formData,{schema:formDataZod})
        },
        shouldValidate:"onBlur",
        shouldRevalidate:"onInput"
    })
// console.log(field);


  return (
    <div>
        <form action={formAction} onSubmit={form.onSubmit} id={form.id}>
            <input name={field.username.name} key={field.username.key}/>
            {/* <p>{field.username.name}</p> */}
            <input name={field.email.name} key={field.email.key}/>
            {field.email.errors &&<p>{field.email.errors}</p>}
            <input name={field.password.name} key={field.password.key}/>
            <input name={field.address.name} key={field.address.key}/>
            <button type="submit">Submit</button>
        </form>
        {}
    </div>
  )
}

export default page
