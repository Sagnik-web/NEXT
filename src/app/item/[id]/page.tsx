import React from 'react'

const page = async ({param}:{param:any}) => {

    const {id} =await param

    console.log(id);
    

  return (
    <div>Item</div>
  )
}

export default page