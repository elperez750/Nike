import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src={offer} 
            alt="special offer" 
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-coral-red">Special </span>Offer
          </h2>
          <p className="text-gray-600 mb-6">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="text-gray-600 mb-8">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button label="Shop Now" iconUrl={arrowRight} />
            <Button label="Learn More" type="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;