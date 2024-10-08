import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Arrow = ({ direction, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="m-4 flex rounded-full bg-white w-16 h-16 justify-center items-center hover:bg-gray-200" onClick={onClick}>
        {direction === "left" ? (
          <ChevronLeft className="text-coral-red" size={36} />
        ) : (
          <ChevronRight className="text-coral-red" size={36} />
        )}
      </button>
    </div>
  );
};

export default Arrow;
