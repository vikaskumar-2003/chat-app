import React from 'react'
import "./RightSideBar.css"
import assets from '../../assets/assets/assets'

const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
         <img src={assets.profile_img} alt="" />
         <h3>Golu <source /></h3>
         <p>hey i am golu</p>
      </div>
    <hr/>
      <div className="rs-media">
        <p>
          Media
        </p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          
        </div>
      </div> 
      <button>Logout</button>
    </div>
  )
}

export default RightSideBar
