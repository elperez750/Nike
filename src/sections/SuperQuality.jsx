import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <div className="w-full flex justify-around mt-0 mb-20">
    <section className="w-1/2 flex flex-col ">
      <div className="">
        <h1 className="text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality </span>
          Shoes
        </h1>
        <div className="text-xl font-light">
          <p className="mt-10">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-10">
            Our dedication to detail and excellence ensure your satisfaction
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Button label="View Details" iconUrl={arrowRight} />
      </div>
    </section>

    <section className="w-1/4 flex flex-col p-10">
      <img src={shoe8} alt="shoe" className="w-full object-cover" />
    </section>
    </div>
  );
};

export default SuperQuality;
