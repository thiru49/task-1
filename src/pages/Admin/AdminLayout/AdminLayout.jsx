import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Header from "./Header";
import { RiMenuLine } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";

const AdminLayout = () => {
  const [token, setToken] = useState(null);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setToken(JSON.parse(token));
    } else {
      navigate("/login")
    }
  }, [navigate]); 

  return (
    <div className={`h-[100vh] grid ${!menu ? 'grid-cols-12' : 'grid-cols-4'} grid-rows-7 gap-1`}>
      <section className="border-2 border-slate-200 bg-sky-100 rounded-md shadow-md row-span-7 flex flex-col transition-all ">
        <div className="border-b border-sky-200 p-5 text-2xl font-extrabold text-sky-950 flex items-center justify-center gap-4">
          <h1 className={`${menu? 'block':'hidden'}`}>Package Manager</h1>
          <div onClick={()=>setMenu(!menu)}>
            {menu ? <MdRestaurantMenu /> : <RiMenuLine/>}
            
          </div>
        </div>
        <NavBar menu={menu}/>
      </section>
      <header className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md col-start-2 col-span-12 row-span-1 flex justify-end items-center gap-4">
        <Header />
      </header>
      <main className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md row-span-7 row-start-2 col-start-2 col-span-12 flex flex-col overflow-scroll">
        <Outlet />
      </main>
    </div>
  )
};

export default AdminLayout;
