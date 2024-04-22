import { Row, Col } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const AdminLayout = () => {
 
  return (
    <div className="h-[95vh] grid grid-cols-4 grid-rows-7 gap-4 m-4">
      <section className="border-2 border-slate-200 bg-sky-100 rounded-md shadow-md row-span-7 flex flex-col py-10 items-center">
        <NavBar />
      </section>
      <header className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md col-start-2 col-span-3 row-span-1">
        header{" "}
      </header>
      <main className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md row-span-7 row-start-2 col-start-2 col-span-3 flex flex-col">
        <Outlet />
      </main>
    </div>
  )
};

export default AdminLayout;
