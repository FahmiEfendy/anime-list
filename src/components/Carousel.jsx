import React, { useState } from "react";

import CarouselItem from "./CarouselItem";

const Carousel = ({ datas }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {/* TODO: Add Swipe Function */}
        {datas.map((data) => (
          <CarouselItem key={data.id} data={data} />
        ))}
      </div>

      <div className="absolute bottom-2 py-4 flex justify-center gap-3 w-full">
        {datas.map((data, index) => {
          return (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              key={`cirlce-${index}`}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
