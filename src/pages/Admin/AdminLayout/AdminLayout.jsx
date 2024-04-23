import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import Header from "./Header";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return user && typeof user === "object" && user.token ? (
    <div className="h-[95vh] grid grid-cols-4 grid-rows-7 gap-4 m-4">
      <section className="border-2 border-slate-200 bg-sky-100 rounded-md shadow-md row-span-7 flex flex-col py-10 items-center">
        <NavBar />
      </section>
      <header className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md col-start-2 col-span-3 row-span-1 flex justify-end items-center gap-4">
        <Header />
      </header>
      <main className="border-2 border-slate-200 bg-sky-100 rounded-md  shadow-md row-span-7 row-start-2 col-start-2 col-span-3 flex flex-col">
        <Outlet />
      </main>
    </div>
  ) : null;
};

export default AdminLayout;
