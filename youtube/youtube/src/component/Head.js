import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch=useDispatch() 

  const toggleMenuHandler = () => {
     dispatch(toggleMenu())
   }

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow">
      <div className=" flex h-8 col-span-1">
        <img
          className="cursor-pointer"
          onClick={()=>{toggleMenuHandler()}}
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
             alt="logo"
          />
         </a> 
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="enter your video"
          className="w-1/2 h-8 text-center border border-gray-500 rounded-l-full outline-none"
        />
        <button className="border border-gray-500 h-8 rounded-r-full pt-[1px] px-3 bg-gray-300   ">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
