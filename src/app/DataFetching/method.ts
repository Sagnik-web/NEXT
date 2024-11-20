import baseApi from "./baseApi"

export const postAPI =async(token:string,url:string,data:any)=>{
    const res =await baseApi(token).post(url,data)
    return res
}


export const getAPI =async(token:string,url:string)=>{
    const res =await baseApi(token).get(url)
    return res
}


export const patchAPI =async(token:string,url:string,data:any)=>{
    const res =await baseApi(token).patch(url,data)
    return res
}

export const putAPI =async(token:string,url:string,data:any)=>{
    const res =await baseApi(token).put(url,data)
    return res
}

export const deleteAPI =async(token:string,url:string)=>{
    const res =await baseApi(token).delete(url)
    return res
}