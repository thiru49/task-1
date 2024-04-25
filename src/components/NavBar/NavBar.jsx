import React from "react";
import { navbar } from "../../constant/index";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({menu}) => {
  const currentPath = useLocation();
  let pathName = currentPath.pathname.split('/')
  console.log(pathName[2])
  return (
    <>
    
    <ul className="flex flex-col gap-4 items-center">
      {navbar.map((item, index) => (
        <li key={index}>
          <NavLink to={item.to} className={`flex items-center p-2 text-xl gap-4  ${pathName[2]=== item.to ? 'font-bold':"font-light opacity-70"}`}><span className="">{item.icon}</span><span className={`${menu? 'block':'hidden'}`}>{item.name}</span></NavLink>
        </li>
      ))}
    </ul>
    </>
  );
};

export default NavBar;
