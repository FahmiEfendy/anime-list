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
            {/* TODO: Top Airing Anime */}
            <Carousel datas={DUMMY_DATA} />
            {/* TODO: Top Anime All */}
            <Slider datas={DUMMY_DATA} header="Top Anime" />
            {/* TODO: Top Anime TV | Movie | Upcoming | Popularity | Favorite | OVA | Special  */}
            <div id="footer" className="mt-36"></div>
          </React.Fragment>
        }
      />
      <Route path="/:id" element={<AnimeDetail />} />
    </Routes>
  );
}

export default App;
