import React from "react";
import { Routes, Route } from "react-router-dom";

import { DUMMY_DATA } from "./data/data";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";
import AnimeDetail from "./components/AnimeDetail";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
            <Carousel datas={DUMMY_DATA} />
            <Slider datas={DUMMY_DATA} header="Top Anime" />
            <div id="footer" className="mt-36"></div>
          </React.Fragment>
        }
      />
      <Route path="/:id" element={<AnimeDetail />} />
    </Routes>
  );
}

export default App;
