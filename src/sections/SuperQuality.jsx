import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-0 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Provide You <span className="text-coral-red">Super Quality </span>
            Shoes
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-base sm:text-lg">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you with
              unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="text-base sm:text-lg">
              Our dedication to detail and excellence ensure your satisfaction
            </p>
          </div>
          <div className="mt-8">
            <Button label="View Details" iconUrl={arrowRight} />
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img 
            src={shoe8} 
            alt="Super quality shoe" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;