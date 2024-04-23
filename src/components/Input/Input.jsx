import React, { forwardRef } from "react";

const Input = forwardRef(({ label, error, type, className, placeholder, value, onChange, id, name, register }, ref) => {
  return (
    <div className="grid grid-cols-3 text-sky-800 font-bold gap-4 transition-all">
      {label && (
        <label htmlFor={id} className="text-center">
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        id={id}
        type={type}
        className={`px-2 py-1 col-span-2 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...register}
      />
      {error && (
        <p className="text-red-500 text-center col-span-3">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
