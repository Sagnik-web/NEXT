import { connect } from "@/app/dbConfig/dbConfig";
import Blog from "@/model/blog"
import { NextRequest, NextResponse } from "next/server";



connect()

export async function POST(request:NextRequest) {
   
    try{
        const reqBody = await request.json()
        const {title,content,tags} = reqBody

        // console.log(title);
        const blog = new Blog({
            title:title,
            content:content,
            tags:tags
        })

        await blog.save()

        return NextResponse.json({
            success:true,
            msg:"Blog Submitted Successfully",
            blog

        })
        
    }
    catch(err){
        return NextResponse.json({
            success:false,
            msg:"error",
            err
        })
    }
   
}



export async function GET() {
    try{

        const blogs = await Blog.find()
        if(!blogs){
            return NextResponse.json({
                success:false,
                msg:"Blogs Not Found"
            })
        }

        return NextResponse.json({
            success:true,
            msg:"Successfully Get Msg",
            blogs
        })

    }catch(err){
        return NextResponse.json({
            success:false,
            msg:"error",
            err
        })
    }
    
}