import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./NavComponent.css";
const NavComponent = () => {

const [ displayMenu, setDisplayMenu ] = useState(false);
  return (
    <div className="nav-component">
      <div className="logo">
        <Link to="/">
          <div>Market</div>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/about">About</Link>

        <Link to="/signup">Sign Up</Link>
      </div>

      <div className="right-nav">
        <input type="text" placeholder="What are you looking for?" />

        <CiSearch />
      </div>

      <div className="small-screen-nav">
        <div className="small-header-wrapper">
          <Link to="/">
            <div>Market</div>
          </Link>

          <div className="icon"  onClick={()=>setDisplayMenu(!displayMenu)}>

                      {
                          !displayMenu &&  <FiMenu
         />
                          
                      }
        

                      {
                          displayMenu &&
                     
                          <IoIosCloseCircleOutline />
                       }

          </div>
              </div>
              
              {
                  displayMenu &&
             

                 <div className="small-screen-links">
          <Link to="/">Home</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/about">About</Link>

          <Link to="/signup">Sign Up</Link>
                  </div>
              
               }
      </div>
    </div>
  );
};

export default NavComponent;