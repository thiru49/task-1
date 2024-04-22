import React from "react";

const FormRow = ({ label, error, children }) => {
  return (
    <div className="grid grid-cols-3 text-sky-900 text-bold gap-4 transition-all">
      {label && (
        <label htmlFor={children.props.id} className="text-center">
          {label}
        </label>
      )}
        {children}
      {error && (
        <p className="text-red-500 text-center col-span-3">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormRow;
