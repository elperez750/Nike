import React from "react";

const Button = ({ label, iconUrl, type="primary"}) => {
  const primary = "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-md";
  const secondary = "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white text-black rounded-md";
  return (
    <button className={type === "primary" ? primary : secondary}>
      {label}
      {iconUrl? <img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-lg w-5 h-5"/>: null}
    </button>
  );
};

export default Button;
