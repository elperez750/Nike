import React from "react";
import { star } from "../assets/icons";

const PopularShoeCard = ({ imageSrc, name, rating, price }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-primary bg-card rounded-md h-72">
        <img src={imageSrc} alt={name} className="w-full h-64 object-cover" />
      </div>

      <div className="text-lg font-bold mt-6">
        <div className="flex items-center">
          <img src={star} alt="star" className="w-4 h-4" />
          <h1 className="text-xl text-gray-400 font-light ">({rating})</h1>
        </div>

        <div className="text-2xl mt-6">
          <h1>{name}</h1>
          <h1 className="text-coral-red mt-6">{price}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularShoeCard;
