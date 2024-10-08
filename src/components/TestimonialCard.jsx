import React, { useState } from "react";
import { customer1, customer2 } from "../assets/images";
import { Quote, Star } from "lucide-react";
import Arrow from "./Arrow";

const TestimonialCard = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const customers = [
    {
      name: "Elliott Perez",
      icon: customer1,
      position: "Marketing Director at TechCorp",
      testimonial:
        "I have been using this product for the past 6 months and I have never been happier. It has helped me increase my productivity and has made my life so much easier. I would highly recommend this product to anyone who is looking for a reliable solution.",
    },
    {
      name: "Megan Ford",
      icon: customer2,
      position: "CEO of Ford Enterprises",
      testimonial:
        "I have been using this product for the past 6 months and I have never been happier. It has helped me increase my productivity and has made my life so much easier. I would highly recommend this product to anyone who is looking for a reliable",
    },
    {
      name: "Jowan Taylor",
      icon: customer2,
      position: "CEO of Google",
      testimonial:
        "I have been using this product for the past 6 months and I have never been happier. It has helped me increase my productivity and has made my life so much easier. I would highly recommend this product to anyone who is looking for a reliable solution.",
    },
  ];

  const handleNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % customers.length);
  }

  const handlePrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + customers.length) % customers.length);
  }

  return (
    <div className="flex items-center justify-center">
      <Arrow direction="left" onClick={handlePrev} />

      <div className="shadow-xl w-1/2 h-64 bg-white mt-8 rounded-lg overflow-hidden">
        <div className="transition-opacity duration-300 ease-in-out">
          <div className="flex ml-4 mt-4">
            <img
              src={customers[testimonialIndex].icon}
              alt="customer"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col justify-center ml-4">
              <h1 className="font-bold">{customers[testimonialIndex].name}</h1>
              <p className="font-light">{customers[testimonialIndex].position}</p>
            </div>
          </div>

          <div className="flex flex-col p-4">
            <Quote className="text-coral-red mb-2" size={24} />
            <p className="font-light text-lg italic">
              {customers[testimonialIndex].testimonial}
            </p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="text-yellow-400"
                  fill="currentColor"
                  size={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Arrow direction="right" onClick={handleNext}/>
    </div>
  );
};

export default TestimonialCard;