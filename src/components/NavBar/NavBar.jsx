import React from "react";
import { navbar } from "../../constant";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex flex-col gap-4">
      {navbar.map((item, index) => (
        <li key={index}>
          <NavLink to={item.to}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
