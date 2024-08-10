import React from "react";
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="w-100% h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-1/2 h-full flex justify-center items-center max-md:hidden block">
          <div className="2xl:w-9/12 2xl:h-5/6 xl:w-8/12 xl:h-4/6 lg:w-7/12 lg:h-3/6 md:w-96 md:h-96 bg-white flex justify-center items-center rounded-3xl ">
            <img src="/img/Time management-cuate.png" className="h-4/6 w-9/12" alt="" />
          </div>
        </div>
        <div className="lg:w-1/2 h-full">
          <div className="w-full h-1/4 flex flex-col items-center p-5 pt-14">
            <img src="/img/Group 1395.png" alt="" className="w-14 h-14" />
            <h1 className="text-5xl pt-3 ">Organizo</h1>
          </div>
          <div className="w-full flex justify-center pt-7">
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
                    required
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
                  <Link to="/Home" className="rounded-xl w-72 h-8 border-2 hover:bg-yellow-400 flex justify-center items-center">
                    Login
                  </Link>
                </div>
                <div className="pt-12">
                  <p className="text-sm">
                    Don't have an account?
                   <Link to ="/NewLogin" className="pl-2 text-blue-600">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};
