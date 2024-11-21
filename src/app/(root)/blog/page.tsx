'use client'

import { getAllBlogs } from '@/app/DataFetching/Blog/blogApi'
import React, {useEffect} from 'react'

function BlogPage() {

  useEffect(()=>{
    getAllBlogs()
    .then(res=>{
      console.log(res.data);
      
    })
    .catch(err=>{
      console.log("Error ",err);
    })
  },[])

  return (
    <div>
        <h2>Blog Page</h2>
    </div>
  )
}

export default BlogPage
