"use server"
export async function formDataSubmit(previousState:any,formData:FormData) {
    
    console.log("Form Data", formData);

    const data ={
        password:formData.get('password'),
        email:formData.get('email')
    }
    
    return {...previousState,data}
}