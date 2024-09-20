import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="w-full p-40 flex">
      <div className="w-1/2">
        <img src={offer} alt="special offer" className="w-full object-cover" />
      </div>

      <div className="w-1/2 flex flex-col justify-center p-10">
        <h1 className="text-4xl font-bold ">
          <span className="text-coral-red">Special </span>Offer
        </h1>
        <p className="mt-6">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex mt-10 gap-x-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More"  type="secondary"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
