import React, { useState, useEffect } from "react";
import { customer1, customer2 } from "../assets/images";
import { Quote, Star } from "lucide-react";
import Arrow from "./Arrow";

const TestimonialCard = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

const customers = [
  {
    name: "Michael Johnson",
    icon: customer1,
    position: "Professional Runner",
    testimonial:
      "Nike's Air Zoom Pegasus has been my go-to running shoe for years. The latest model offers incredible comfort and responsiveness, helping me shave seconds off my personal best. Whether I'm training for a marathon or doing a quick 5K, these shoes never let me down.",
  },
  {
    name: "Lauren Chen",
    icon: customer2,
    position: "Fitness Instructor",
    testimonial:
      "As a fitness instructor, I need versatile shoes that can handle various workouts. The Nike Metcon series is perfect for my needs. They provide excellent stability for weightlifting and enough cushioning for high-intensity interval training. My clients often ask about them, and I always recommend Nike.",
  },
]

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTestimonialIndex((prev) => (prev + 1) % customers.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTestimonialIndex((prev) => (prev - 1 + customers.length) % customers.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [testimonialIndex]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative shadow-xl bg-white rounded-lg overflow-hidden">
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center p-6 sm:p-8">
              <img
                src={customers[testimonialIndex].icon}
                alt={customers[testimonialIndex].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-900">{customers[testimonialIndex].name}</h2>
                <p className="text-sm text-gray-600">{customers[testimonialIndex].position}</p>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8">
              <Quote className="text-coral-red mb-4 mx-auto" size={32} />
              <p className="text-gray-700 text-base sm:text-lg italic mb-6 text-center">
                {customers[testimonialIndex].testimonial}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-yellow-400"
                    fill="currentColor"
                    size={20}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 mb-4">
          {customers.map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonialIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${
                index === testimonialIndex ? "bg-coral-red" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <Arrow direction="left" onClick={handlePrev} />
          <Arrow direction="right" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;