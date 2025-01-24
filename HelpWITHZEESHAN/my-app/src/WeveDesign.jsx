import React from "react";

const WaveDesign = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-yellow-400">
      {/* Background Waves */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#fdf9f4]"></div>
      <div className="absolute w-full transform rotate-180 bottom-0">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fdf9f4"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,208C480,213,600,203,720,186.7C840,171,960,149,1080,165.3C1200,181,1320,235,1380,261.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute w-full top-1/2 -translate-y-1/2 flex overflow-hidden">
        <div className="flex animate-scroll text-blue-700 text-2xl font-bold whitespace-nowrap">
          <p className="mr-10">BIG FRUIT FLAVORS BUBBLES BENEFITS</p>
          <p className="mr-10">BIG FRUIT FLAVORS BUBBLES BENEFITS</p>
          <p className="mr-10">BIG FRUIT FLAVORS BUBBLES BENEFITS</p>
        </div>
      </div>

      {/* Circle Badge */}
      <div className="absolute bottom-5 left-5 bg-blue-700 text-white p-4 rounded-full shadow-lg">
        Best Seller Pack
      </div>
    </div>
  );
};

export default WaveDesign;
