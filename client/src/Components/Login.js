import React from "react";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="w-100% h-screen bg-gray-100 flex justify-center items-center">
      {/* <div className="w-5/6 h-5/6 flex "> */}
        <div className="w-1/2 h-full flex justify-center items-center max-lg:hidden block">
          <div className="2xl:w-10/12 2xl:h-4/6 xl:w-9/12 xl:h-3/6 lg:w-8/12 lg:h-2/6  bg-yellow-100 flex justify-center rounded-3xl ">
            <img src="/img/Scrum board-bro.png" className="xl:h-full " alt="" />
          </div>
        </div>
        <div className="lg:w-1/2 h-full  ">
          <div className="w-full h-1/4 flex justify-center p-5">
            <img src="/img/Text_logo.png" alt="" className="pt-5" />
          </div>
          <div className="w-full flex justify-center pt-10">
            <div className="w-96 h-3/6 bg-white flex  justify-center rounded-3xl ">
              <form action="" className="p-8">
                <div className="pb-2 font-Oswald font-bold">
                  <label htmlFor="" className="text-sm">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    className="bg-slate-200 w-72 pl-3 text-sm rounded-2xl h-8 opacity-2"
                    placeholder="Your Email"
                  />
                </div>
                <div className="pb-2 pt-3 font-bold">
                  <label htmlFor=""className="text-sm">Password</label>
                </div>
                <div>
                  <input
                    type="password"
                    className="bg-slate-200 w-72 pl-3 text-sm rounded-2xl h-8 opacity-2"
                    placeholder="Your Password"
                  />
                </div>
                <div className="flex justify-center pt-11">
                  <button className="rounded-xl w-24 h-10 border-2 hover:bg-yellow-200 flex justify-center items-center">
                    Login
                  </button>
                </div>
                <div className="pt-12">
                  <p className="text-sm">
                    Don't have an account?
                   <Link to ="/NewLogin">Sign up</Link>
                   
                    
            
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};
