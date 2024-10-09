import React, { useState } from "react";
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import ShoeThumbnail from "../components/ShoeThumbnail";

const Hero = () => {
  const [shoe, setShoe] = useState(shoes[0].bigShoe);

  const handleClick = (selectedShoe) => {
    setShoe(selectedShoe.bigShoe);
  }

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-between items-center min-h-screen gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xl:py-24"
    >
      <div className="flex flex-col justify-center items-start w-full xl:w-2/5 z-10">
        <p className="text-coral-red text-lg sm:text-xl lg:text-2xl mb-4">Our Summer Collection</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6">
          <span className="whitespace-nowrap">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light mb-8">
          Discover stylish Nike Arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex flex-wrap justify-start items-start w-full mt-12 gap-8">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">{stat.value}</h2>
              <p className="font-light text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center xl:justify-end w-full xl:w-3/5 mt-12 xl:mt-0">
        <div className="relative w-full max-w-lg xl:max-w-xl">
          <div className="bg-hero bg-cover bg-center w-full pt-[100%] rounded-3xl"></div>
          <img 
            src={shoe} 
            alt="Featured Nike shoe" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-auto object-contain"
          />
        </div>

        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center gap-4 sm:gap-6">
          {shoes.map((item) => (
            <div key={item.thumbnail} onClick={() => handleClick(item)} className="cursor-pointer">
              <ShoeThumbnail
                imageSrc={item.thumbnail}
                active={item.bigShoe === shoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;