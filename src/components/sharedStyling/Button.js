import React from "react";

const Button = ({ children, btnDisabled }) => {
  return (
    <button disabled={btnDisabled} type="submit">
      {children}
    </button>
  );
};

export default Button;
