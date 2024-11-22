"use server"
import {parseWithZod} from "@conform-to/zod"
import formDataZod from "../DataValidation/formDataZod"

export async function formZodSubmit(preVal:any,formData:FormData) {
    
    const data = parseWithZod(formData,{
        schema:formDataZod
    })

    console.log(data);
    
    // return data
}