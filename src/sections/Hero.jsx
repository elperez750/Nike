import React, {useState} from "react";
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { shoes } from "../constants";
import ShoeThumbnail from "../components/ShoeThumbnail";
const Hero = () => {


  const [shoe, setShoe] = useState(shoes[0].bigShoe);

  const handleClick = (shoe) => {
    setShoe(shoe.bigShoe);
  }


  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddingx pt-28 z-10">
        <p className="text-coral-red text-3xl mb-10">Our Summer Collection</p>
        <h1 className="text-8xl font-bold max-md:text-4xl ">
          <span className="whitespace-nowrap ">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </h1>
        <p className="text-2xl font-light mt-10 mb-10 max-md:text-xl">
          Discover stylish Nike Arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <h2 className="font-bold text-4xl">{stat.value}</h2>
              <p className="font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center bg-primary bg-hero bg-cover z-0">
        <img src={shoe} alt="main shoe" />

        {/* Shoe Thumbnails */}
        <div className="absolute bottom-[-80px] left-0 right-0 flex justify-center gap-5">
          {shoes.map((item) => (
            <div key={item.thumbnail} onClick={() => handleClick(item)}>
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
