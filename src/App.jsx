import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import { UserLayout } from './components/UserLayout';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import { ManageFolder } from './pages/ManageFolder';
import { ManageImages } from './pages/ManageImages';
import UserDashboard from './pages/UserDashboard';
import Folder from './pages/Folder';
import PackageDetails from './components/PackageDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
