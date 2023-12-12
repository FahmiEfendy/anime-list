import moment from "moment";
import { useEffect, useState } from "react";

import { DUMMY_DATA as data } from "../data/data";

const Search = () => {
  const [searchInput, setSearchInput] = useState();
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    if (searchInput === "") return setSearchedData([]);

    const searchResults = data.filter((d) =>
      d.title.toLowerCase().includes(searchInput)
    );

    setSearchedData(searchResults);
  }, [searchInput]);

  const searchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="bg-white w-3/12 rounded relative ms-10">
      <div className="flex">
        <input
          type="text"
          placeholder="Search anime..."
          className="py-2 pl-5 rounded-l"
          style={{ width: "100%" }}
          onChange={searchChangeHandler}
        />
        <button className="bg-white py-2 px-5 bg-zinc-950 text-white ms-auto rounded">
          S
        </button>
      </div>
      <div className="absolute z-10 bg-white w-full">
        {searchedData.map((d, i) => {
          return (
            <div
              className={`h-30 flex py-1 px-3 ${i % 2 === 1 && "bg-zinc-100"}`}
              key={d.id}
            >
              <img
                src={d.main_picture.medium}
                alt={d.title}
                className="object-cover w-20"
              />
              <div className="ms-5 pt-2">
                <p className="text-xl font-medium mb-1">{d.title}</p>
                <span>
                  <label>Score {d.mean}</label>
                  <label> • </label>
                  <label>{d.media_type.toLocaleUpperCase()}</label>
                  <label> • </label>
                  <label>{moment(d.start_date).format("MMMM D, YYYY")}</label>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
