import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

  const dispatch=useDispatch() 
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [shoSuggestion, setShowSuggestion] = useState(false)
  const searchCache=useSelector(store=>store.search)

  useEffect(() => {
    
     if (!searchQuery) {
      setSearchQuery("");
      return;
    }

   
   
    const timer = setTimeout(() => {
      
       if (searchCache[searchCache]) {
      setSuggestion(searchCache[searchCache])
    }
    else {
      getSearchSuggestion()
    }
      
    }, 200) 
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
  
  const getSearchSuggestion = async () => {
    try {
      console.log("api", searchQuery);
      
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
      const json = await data.json()
      setSuggestion(json[1])
      console.log(json);
      dispatch(cacheResults({
        [searchQuery]:json[1]
      }))
    }
    catch (error) {
      console.log(error);
      
     }
  
    
    
  }


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
          value={searchQuery}
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          placeholder="enter your video"
          className="w-1/2 h-8 text-center border border-gray-500 rounded-l-full outline-none"
          onFocus={() => { setShowSuggestion(true) }}
          onBlur={() => { setShowSuggestion(false) }}
        />
        <button className="border border-gray-500 h-8 rounded-r-full pt-[1px] px-3 bg-gray-300   ">
          Search
        </button>
        {shoSuggestion&& (<div className=" absolute bg-white py-2 px-5 w-[34rem] rounded-lg   ml-[16%] border border-gray-100 ">
          <ul>
            {
              suggestion.map((s) => (<li key={s} className=" py-2 hover:bg-gray-100 " >
                {s} </li>))
            }
          

          </ul>
        </div>)}
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
