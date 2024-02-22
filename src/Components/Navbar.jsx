import React from "react";
import { Link, NavLink, RouterProvider, createBrowserRouter } from "react-router-dom";
function Navbar() {
    
  return (
    <>
      <div className="w-full h-16 bg-slate-50 flex justify-between px-[15%] py-2 items-center">
        <div className="logo text-20">Logo</div>
        <div className="nav ">
          <ul className="flex gap-4">
            <NavLink to={"/"} className={(e)=>{
                return e.isActive?'text-orange-600':'text-zinc-700'
            }}>
              <li className="font-medium text-base">Home</li>
            </NavLink>
            <NavLink to={"/About"} className={(e)=>{
                return e.isActive?'text-orange-600':'text-zinc-700'
            }}>
              <li className="font-medium text-base">About</li>
            </NavLink>
            <NavLink to={"/Contact"} className={(e)=>{
                return e.isActive?'text-orange-600':'text-zinc-700'
            }}>
              <li className="font-medium text-base">Contact</li>
            </NavLink>
            <NavLink to={"/Github"} className={(e)=>{
                return e.isActive?'text-orange-600':'text-zinc-700'
            }}>
              <li className="font-medium text-base">GitHub</li>
            </NavLink>
            
            {/* <a href="/" className="no-underline text-orange-600">
                <li>Home</li>
            </a>
            <a href="/About">
                <li>
                    About
                </li>
            </a>
            <a href="/Github">
                <li>
                    GitHub
                </li>
            </a>
            <a href="/Contact">
                <li>
                    Contact
                </li>
            </a> */}
          </ul>
        </div>
        <div className="extra">
            <button className="font-medium text-base">Log in</button>
            <button className="mx-3 bg-orange-700 px-4 py-2 text-sm rounded-md font-semibold text-white">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
