import React from 'react';

const Button = ({ children, type, onClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-md py-0.5 px-2 hover:scale-90 transition-all ${className} ${disabled ? 'bg-red-500' : ''}`}
      type={type}
      onClick={
        onClick
      }
    >
      {children}
    </button>
  );
};

export default Button;
