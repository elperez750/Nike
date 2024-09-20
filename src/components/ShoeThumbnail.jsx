import React from "react";

const ShoeThumbnail = ({ imageSrc, active }) => {
  const baseStyles =
    "relative bg-cover bg-center h-48 w-48 flex justify-center items-center space-x-5 rounded-lg cursor-pointer";
  return (
    <div
      className={
        active
          ? `${baseStyles} border-2 border-coral-red shadow-lg`
          : `${baseStyles} border-2 border-black shadow-lg`
      }
    >
      <img src={imageSrc} alt="shoe" className="relative z-10 h-32 w-auto" />
    </div>
  );
};

export default ShoeThumbnail;
