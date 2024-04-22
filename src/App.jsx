import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import AdminLayout from "./pages/Admin/AdminLayout";
import { UserLayout } from "./pages/User/UserLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageUsers from "./pages/Admin/ManageUsers";
import { ManageFolder } from "./pages/Admin/ManageFolder";
import { ManageImages } from "./pages/Admin/ManageImages";
import UserDashboard from "./pages/User/UserDashboard";
import Folder from "./pages/User/Folder";
import PackageDetails from "./pages/User/PackageDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="admin/" />} />
        <Route path="admin/*" element={<AdminLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-folder" element={<ManageFolder />} />
          <Route path="manage-images" element={<ManageImages />} />
        </Route>
        <Route path="user/*" element={<UserLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="folder" element={<Folder />} />
          <Route path="package/:id" element={<PackageDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
