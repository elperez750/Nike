import React from "react";
import  PopularShoeCard  from "../components/PopularShoeCard"
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10">

      <div className="flex flex-col ml-20 text-pretty">
        <h1 className="text-4xl font-semibold">
          Our
          <span className="text-coral-red"> Popular</span> products
        </h1>
        <p className="mt-10 text-xl tracking-wide font-light">
          Experience top-notch quality and style with our sought-after selections.<br/> Discover a world of Comfort, design and value.
        </p>
      </div>

      <div className="flex gap-x-36 ml-20 mt-10 max-lg:flex-col">
        {products.map((product) => (
          <PopularShoeCard imageSrc={product.imgURL} name={product.name} rating={product.rating} price={product.price}/>

        ))}

      </div>
    </section>
  );
};

export default PopularProducts;
