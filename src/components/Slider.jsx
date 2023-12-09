import { useEffect, useState } from "react";

import SliderItem from "./SliderItem";

const Slider = ({ datas }) => {
  const [current, setCurrent] = useState(0);

  const goLeftHandler = () => {
    setCurrent((prevState) => prevState - 15);
  };

  const goRightHandler = () => {
    setCurrent((prevState) => prevState + 15);
  };

  useEffect(() => {
    if (current > 45) {
      setCurrent(45);
    } else if (current < 0) {
      setCurrent(0);
    }
  }, [current, setCurrent]);

  return (
    <div className="mt-10 mx-20">
      <div className="flex items-center">
        <p className="text-3xl font-medium">Top Anime</p>
        {/* TODO: Change to Icon */}
        <button className="ml-auto me-5" onClick={goLeftHandler}>
          LEFT
        </button>
        <button onClick={goRightHandler}>RIGHT</button>
      </div>
      <div className="overflow-hidden relative">
        <div
          className="flex transition ease-out duration-500 mt-5"
          style={{ transform: `translateX(-${current}%)` }}
        >
          {datas.map((data) => (
            <SliderItem key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
