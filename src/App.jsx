import React from "react";

import DUMMY_DATA from "./data/data";
import Carousel from "./components/Carousel";

function App() {
  return (
    <React.Fragment>
      <Carousel datas={DUMMY_DATA} />
    </React.Fragment>
  );
}

export default App;
