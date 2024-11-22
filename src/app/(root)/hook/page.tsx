
"use client"
import React, { useRef } from 'react'

function page() {

    const initRef = useRef(null)
    
    const onSubmit =()=>{
        console.log(initRef.current);
        
    }

  return (
    <>
    {/* <div className='focus:bg-blue-600 '> */}
        {/* <input ref={initRef}/> */}
        {/* <div id="abc" onClick={onSubmit}>Hello</div>
        <button className="transition ease-in-out delay-150 bg-blue-500 focus:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
  Click me
</button>
    </div> */}
    <div>


    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>


    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>


    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/400x250" alt="Card image"/>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Card Title</h2>
    <p className="text-gray-700 text-base">
      This is a simple card description. It can contain some text, details, or any other content you wish to include.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Learn More</button>
  </div>
</div>

    </div>

    <div className="bg-gray-100 min-h-screen flex items-center justify-center tran">
    <div className="absolute inset-0 bg-white opacity-80 animate-[fade_1s_ease-in-out_1s_forwards]">
        <div className="relative z-10 max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow">
            
            <h1 className="text-2xl font-bold mb-4">Welcome to My Animated Page</h1>
            <p className="mb-4">This page demonstrates an animated focus effect using Tailwind CSS.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Learn More
            </button>
        </div>
    </div>
</div>

    </>
  )
}

export default page
