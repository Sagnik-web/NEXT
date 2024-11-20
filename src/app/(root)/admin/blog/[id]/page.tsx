import React from 'react'

async function page({params}:{params:any}) {

    const {id} = await params

  return (
    <div>
      Blog {id}
    </div>
  )
}

export default page
