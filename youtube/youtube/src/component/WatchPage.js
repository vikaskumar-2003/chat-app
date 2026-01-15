import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const params = useParams()
  const [searchParam] = useSearchParams();
  const data=searchParam.get("v");
  console.log(searchParam);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
   <div className="flex flex-col w-full">

    
   <div className="px-5 flex">
     <div>
       <iframe
        width="1060"
        height="515"
        src={"https://www.youtube.com/embed/"+data}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
          ></iframe>
          </div>
          <div className="w-full">
            <LiveChat/>
         </div>

      </div>

        <CommentContainer />
        
       </div>
    </>
  );
};

export default WatchPage;
