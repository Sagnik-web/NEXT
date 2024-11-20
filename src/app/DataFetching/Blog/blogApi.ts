import { getAPI } from "../method"

export const getAllBlogs =async ()=>{
    const res = await getAPI("",'/api/blog')
    return res
}