import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function () {
  const [firstName, setfirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="bg-gray-100 w-100% h-screen flex justify-center items-center">
        <div className="lg:w-1/2 h-full flex flex-col items-center ">
          <div className="flex justify-center p-1">
            <img src="/img/Group 1395.png" alt="" className="w-14 h-18 pt-6" />
          </div>
          <div className="text-5xl flex justify-center">
          Organizo
          </div>
          <div className="2xl:w-10/12 2xl:h-4/6 xl:w-10/12  xl:h-3/6 lg:w-9/12 lg:4/6  w-full  flex justify-center p-10">
            
            <div className="w-3/4 bg-white flex justify-center  p-8 rounded-3xl">
              <form className="w-full max-w-lg  ">
                <div className="mb-4">
                  <label
                    className=" text-gray-700 text-sm font-bold rounded-3xl "
                    htmlFor="firstName"
                  >
                    Name
                  </label>
                  <input
                    className="bg-gray-200 border  w-full py-2 px-3 rounded-3xl text-gray-700 "
                    id="firstName"
                    type="text"
                    placeholder="Name"
                  />
                </div>
               
                <div className="mb-4">
                  <label
                    className=" text-gray-700 text-sm font-bold  "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-200 border  w-full rounded-3xl py-2 px-3 text-gray-700 "
                    
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className=" text-gray-700 text-sm font-bold "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-200 border  rounded-3xl w-full py-2 px-3 text-gray-700 "
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className=" text-gray-700 text-sm font-bold"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="bg-gray-200 border rounded-3xl w-full py-2 px-3 text-gray-700  "
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="flex items-center justify-center  ">
                  <button
                    className=" w-full border-2 bg-yellow-300  py-2 px-4 rounded-3xl"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mt-5">
                  <p className="text-sm">
                    <a className="font-bold">Already have an account?  </a>
                   <Link to ="/">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
         
        </div>
        <div className="w-1/2 h-full flex justify-center items-center max-lg:hidden block">
        <div className="bg-white flex justify-center  p-10 rounded-3xl">
          <div className="2xl:w-10/12 2xl:h-4/6 xl:w-10/12 xl:h-3/6 lg:w-9/12 lg:4/6  bg-white flex justify-center rounded-3xl ">
            <img src="/img/Task-cuate 1.png" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
