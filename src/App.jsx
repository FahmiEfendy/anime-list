import React from "react";

import DUMMY_DATA from "./data/data";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";

function App() {
  return (
    <React.Fragment>
      <Carousel datas={DUMMY_DATA} />
      <Slider datas={DUMMY_DATA} />
      <div id="footer" className="mt-36"></div>
    </React.Fragment>
  );
}

export default App;
