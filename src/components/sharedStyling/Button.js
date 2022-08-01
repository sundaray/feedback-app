import React from "react";

const Button = ({ children, btnDisabled, className, type }) => {
  return (
    <button
      className={`btn btn-${className}`}
      disabled={btnDisabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
