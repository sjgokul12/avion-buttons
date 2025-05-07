import React from "react";

const Button = ({ children, variant = "filled" }) => {
  const baseStyles = "text-sm font-medium rounded-full px-6 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg";

  const variants = {
    filled: "bg-black text-white hover:bg-white hover:border border-black hover:text-black",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;