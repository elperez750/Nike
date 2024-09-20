import React from "react";

const ServicesCard = ({ imageUrl, label, subtext }) => {
  return (
    <div className="flex p-6 justify-center flex-col h-72 w-full rounded-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
      
      <div className="flex rounded-full h-10 w-10 p-2 items-center bg-coral-red justify-center">
        <img src={imageUrl} alt="service" className="h-8 w-8 " />
      </div>
      <h1 className="font-bold text-2xl mt-4">{label}</h1>
      <p className="mt-4 text-xl font-light">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
