"use client";  
import { SetStateAction, useEffect, useState } from "react";

export default function Wel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full h-screen" data-carousel="slide">
      <div className="relative h-full overflow-hidden" style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Carousel items */}
        {[...Array(totalSlides)].map((_, index) => (
          <div key={index} className={`absolute inset-0 duration-700 ease-in-out flex flex-col items-start justify-center p-6 pb-12 text-white ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="relative z-10 p-6 rounded-lg bg-black/70">
              <h2 className="text-4xl font-extrabold mb-6">
                {index === 0 && "Welcome to Our Restaurant"}
                {index === 1 && "Discover Our Menu"}
                {index === 2 && "Private Events"}
                {index === 3 && "Outdoor Seating"}
                {index === 4 && "Family Friendly"}
              </h2>
              <p className="text-lg mb-8">
                {index === 0 && "Enjoy the finest dining experience with our specially curated menu and cozy ambiance."}
                {index === 1 && "Our dishes are made from the freshest ingredients and crafted with passion."}
                {index === 2 && "Host your next event with us for an unforgettable dining experience."}
                {index === 3 && "Enjoy your meal in our beautiful outdoor seating area."}
                {index === 4 && "A perfect place for families to dine and make memories together."}
              </p>
              <div className="mt-8">
                <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200 ease-in-out">
                  {index === 0 && "Learn More"}
                  {index === 1 && "View Menu"}
                  {index === 2 && "Book Now"}
                  {index === 3 && "Explore More"}
                  {index === 4 && "Join Us"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-red-600' : 'bg-gray-300'} transition duration-200`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
