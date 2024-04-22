import React from "react";
import { SignupForm } from "./SignupForm";


const ManageUsers = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold text-sky-900 text-center my-2">
        Create New User
      </h1>
      <SignupForm/>
    </div>
  );
};

export default ManageUsers