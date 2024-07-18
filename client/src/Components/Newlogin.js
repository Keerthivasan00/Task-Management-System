import React from 'react'

export default function 
() {
  return (
    <div>
        <div className='bg-gray-100 w-100% h-screen flex justify-center items-center'>
        
    <div className="2xl:w-4/12 2xl:h-5/6 xl:w-9/12 xl:h-3/6 lg:w-8/12 lg:h-2/6 bg-white  flex justify-center items-center rounded-3xl p-6">
    
      <form className="w-full max-w-lg ">
      <div className='flex justify-center text-4xl font-bold pb-6 pt-2'> 
        WELCOME
        
        
        
      </div>
      
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold " htmlFor="firstName">
            First Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 "
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold " htmlFor="lastName">
            Last Name
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold " htmlFor="email">
            Email
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold " htmlFor="password">
            Password
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700 "
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="mb-4">
          <label className=" text-gray-700 text-sm font-bold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className=" border rounded w-full py-2 px-3 text-gray-700  "
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex items-center justify-center  ">
          <button
            className="  border-2 hover:bg-yellow-400  py-2 px-4 rounded "
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>


        </div>
    </div>
  )
}
