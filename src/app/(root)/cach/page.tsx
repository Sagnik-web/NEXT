// 'use cashe'
import Todo from '@/app/component/PageComponents/Todo'
import React, { Suspense } from 'react'
import Loading from './loading'


async function page() {
 
  return (
    <div>
        <Suspense fallback={<Loading/>}>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>

        </Suspense>
    </div>
  )
}

export default page
