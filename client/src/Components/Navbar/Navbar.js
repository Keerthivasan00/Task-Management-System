import React, { useState } from "react";
import Search from "../PopUp/Search";
import { Link } from "react-router-dom";

function Navbar() {

const [isOn,setisOn]=useState(false);
const handleclick =()=>{
    setisOn(!isOn)
  };
const [isSearch,setisSearch]=useState(false);
const handleSearch =()=>{
    setisSearch(!isSearch)
  }
  console.log(isSearch)

  return (
    <>
      <div className={ `${isOn ? 'translate-x-0 h-5/6 mt-16':'-translate-x-80'} md:translate-x-0 w-72 h-98p bg-white rounded-2xl fixed top-3 border-black border-2 left-3` }>
        <div className="w-full h-15p rounded-2xl">
          <div className="w-full h-28 flex justify-center items-center space-x-5">
            <img src="/img/Group 1395.png"  className="w-14 h-14" alt="" />
            <h1 className="text-5xl">Organizo</h1>
          </div>
        </div>
        <div className="w-full h-85p rounded-2xl flex flex-col justify-between">
          <div className="w-full h-96 divide-back pt-5">
              <div className="w-full h-14 flex pl-12 space-x-4 hover:border-black  items-center hover:bg-yellow-400 border-2">
                <img src="/img/Dash_icon.png" className="w-8 h-8" alt="" />
                <h3>Dashboard</h3>
              </div>
              <div className="w-full h-14 flex pl-12 space-x-4 hover:border-2 hover:border-black  items-center hover:bg-yellow-400 ">
                <img src="/img/Task_icon.png" className="w-8 h-8" alt="" />
                <h3>My Task</h3>
              </div>
              <div className="w-full h-14 flex pl-12 space-x-4 hover:border-black items-center hover:bg-yellow-400 border-2">
                <img src="/img/Notification_icon.png" className="w-8 h-8" alt="" />
                <h3>Notification</h3>
              </div>
              <div className="w-full h-14 flex pl-12 space-x-4 hover:border-black items-center hover:bg-yellow-400 border-2 sm:hidden">
                <img src="/img/DarkPlus_icon.png" className="w-8 h-8" alt="" />
                <h3>New Task</h3>
              </div>
          </div>
          
          <div className="w-full h-32 rounded-b-2xl pt-5">
            <div className="w-full h-14 flex pl-12 space-x-4 hover:border-black items-center hover:bg-yellow-400 border-2">
              <img src="/img/Setting_icon.png" alt="" />
              <h3>Settings</h3>
            </div>
            <Link to="/">
            <button className="w-full h-14">
            <div className="w-full h-14 flex pl-12 space-x-4 hover:border-2 border-black items-center hover:bg-yellow-400 rounded-b-2xl">
              <img src="/img/Logout_icon.png" alt="" />
              <h3>Logout</h3>
            </div>
            </button></Link>
          </div>
        </div>
      </div>
      <div className="h-14 md:pl-80 w-full fixed top-0 p-3 rounded-2xl">
        <div className="bg-white w-full h-14 rounded-xl flex ">
          <div className="w-full sm:w-1/2 h-14 rounded-2xl space-x-4 pl-3 pr-4 flex items-center">
            <button  className="w-12 h-12 sm:w-9 sm:h-9 md:hidden" onClick={()=>handleclick()}><img src="/img/Rightarrow_icon.png" alt="" /></button>
            <input type="text" className="w-11/12 sm:w-3/4 h-8 rounded-2xl bg-gray-200 pl-5" placeholder="Search" onClick={handleSearch}/>
            <img src="/img/Mail_icon.png" alt="" className="sm:hidden" />
            <img src="/img/User_icon.png" alt="" className="sm:hidden" /> 
          </div>
          <div className="w-1/2 h-14 rounded-2xl flex items-center justify-end lg:space-x-8 md:space-x-4 lg:pr-8 space-x-7 pr-5 max-sm:hidden">
            <button className="w-32 h-10 bg-yellow-300 rounded-2xl flex items-center pl-4 space-x-2 border-2 border-black">
              <img src="/img/Pluse_icon.png" alt="" className="w-5 h-5"/>
              <h6>New Task</h6>
            </button>
            <img src="/img/Mail_icon.png" alt="" />
            <img src="/img/User_icon.png" alt="" />
          </div>
        </div>
      </div>
      <div className={`${isSearch ? 'w-full h-screen absolute bg-gray-500 bg-opacity-55 pl-80' : 'hidden'}`}>
        <div className="w-5/12 h-4/6 bg-gray-200 mt-16 ml-8 rounded-2xl"></div>
      </div>
      
      
    </>
  );
};

export default Navbar;
