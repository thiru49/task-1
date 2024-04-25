import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import { HiOutlineUser } from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Header() {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('token');
    navigate('/login')
    toast.success('user successfully logout')
  }

  return (
    <>
      <Button className="bg-blue-500 px-2 py-2 relative group">
        <HiOutlineUser />
        <h1 className="font-bold absolute -bottom-[55px] -left-10 transform translate-x-1/2 -translate-y-full text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">{user?.name}</h1>
      </Button>
      
      <Button className="group relative bg-red-800 px-2 py-2 mx-5" onClick={logout}>
        <HiArrowRightOnRectangle />
        <h1 className="font-bold absolute -bottom-[55px] -left-10 transform translate-x-1/2 -translate-y-full text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">Logout</h1>
      </Button>
    </>
  );
}

export default Header;
