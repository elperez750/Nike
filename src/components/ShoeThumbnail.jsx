import React from "react";

const ShoeThumbnail = ({ imageSrc, active }) => {
  return (
    <div
      className={`
        relative w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center 
        rounded-xl cursor-pointer transition-all duration-300 ease-in-out bg-cover bg-card bg-primary bg-center
        ${active 
          ? 'bg-coral-red border-2 border-coral-red shadow-lg' 
          : ' hover:bg-gray-100 border-2 border-transparent'}
      `}
    >
      <div className="absolute inset-0 bg-white opacity-80 rounded-xl" />
      <img 
        src={imageSrc} 
        alt="shoe thumbnail" 
        className="relative z-10 h-16 sm:h-20 w-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110" 
      />
    </div>
  );
};

export default ShoeThumbnail;