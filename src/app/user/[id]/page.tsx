import React from 'react'
// import {useRouter} from 'next/router'


async function pageid ({params}:{params:any}) {

// const id:Number = params?.id;
const { id } = await params
  return (
    <div>pageid {id}</div>
  )
}

export default pageid