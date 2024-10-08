import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex justify-center items-center space-x-64">
      <div className='flex flex-col w-1/2'>
        <h1 className="text-4xl font-semibold">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
      </div>

      <div className="flex items-center relative w- mt-4 justify-end w-1/2">
        <input type="text" placeholder="subscribe@nike.com" className="border border-gray-200 text-lg rounded-full w-full h-16 p-6" />

       <div className="absolute p-4">

       <button className=" bg-coral-red text-white p-2 rounded-full w-36 items-center justify-end">Sign Up</button>

       </div>
      </div>
    </div>
  )
}

export default Subscribe
