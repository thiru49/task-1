import React from "react";
import "./spinnerMini.css";
import { BiLoaderAlt } from "react-icons/bi";
const SpinnerMini = () => {
  return (
    <div className="spinner-mini flex justify-center items-center rounded-full">
      <BiLoaderAlt className="text-slate-900"/>
    </div>
  );
};

export default SpinnerMini;
