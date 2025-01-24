import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  const slides = [
    {
      img: "/path-to-image1.jpg",
      text: "CREATE #EVERYDAYWONDERS",
    },
    {
      img: "/path-to-image2.jpg",
      text: "",
    },
    {
      img: "/path-to-image3.jpg",
      text: "",
    },
    {
      img: "/path-to-image4.jpg",
      text: "",
    },
    {
      img: "/path-to-image5.jpg",
      text: "",
    },
  ];

  return (
    <div className="bg-blue-100 py-6">
      <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
        CREATE #EVERYDAYWONDERS
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        className="w-full px-6"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex-none w-80 sm:w-96 snap-center"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              {slide.text && (
                <p className="text-center font-bold py-2">{slide.text}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-4">
        <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600">
          FOLLOW @drinkwildwonder
        </button>
      </div>
    </div>
  );
};

export default Carousel;
