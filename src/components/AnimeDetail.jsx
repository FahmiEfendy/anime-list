import React, { useRef } from "react";

import { DUMMY_DETAIL as data } from "../data/data";
import StringLimitter from "../utils/StringLimitter";

const AnimeDetail = () => {
  const ref = useRef(null);

  const detailHandler = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      {/* Main */}
      <div className="relative flex">
        {/* Poster */}
        <div className="w-4/12">
          <img
            src={data.main_picture.large}
            className="h-screen object-cover"
          />
        </div>

        {/* Information */}
        <div className="w-8/12 text-white ps-20 mt-48 z-10">
          <p className="text-8xl font-bold mb-10 w-3/6">{data.title}</p>
          <p className="text-3xl font-medium">
            {data.alternative_titles.en || data.alternative_titles.ja}
          </p>
          <div className="my-10 text-black">
            <span className="bg-white rounded-2xl py-2 px-4 mr-2">
              {`Rated ${data.rating.toUpperCase()}`}
            </span>
            <span className="bg-white rounded-2xl py-2 px-4">
              {`Score ${data.mean}`}
            </span>
          </div>
          <p className="text-2xl w-5/6 leading-10">
            {StringLimitter(data.synopsis)}
            <label onClick={detailHandler} className="cursor-pointer">
              read more
            </label>
          </p>
          <div className="mt-10 text-black">
            {data.genres.map((genre) => {
              return (
                <span
                  key={genre.id}
                  className="bg-white rounded-2xl py-2 px-4 mr-2"
                >
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Black Opacity */}
        <div className="absolute h-screen w-4/12 bg-gradient-to-r from-transparent to-zinc-950"></div>
        <div className="absolute right-0 h-screen w-8/12 bg-zinc-950"></div>
      </div>

      {/* Details */}
      <div
        className="bg-zinc-950 flex text-white"
        ref={ref}
        style={{ minHeight: "100vh" }}
      >
        {/* SYNOPSIS */}
        <div className="w-7/12 p-20">
          <p className="text-5xl font-bold">SYNOPSIS</p>
          <hr className="mt-5 mb-8" />
          <p className="text-xl  leading-9 tracking-wider">{data.synopsis}</p>
        </div>

        {/* DETAIL */}
        <div className="w-5/12 p-20">
          <p className="text-5xl font-bold">DETAIL</p>
          <hr className="mt-5 mb-8" />
          <div className="grid gap-4">
            <div className="flex">
              <label className="text-xl">Title</label>
              <label className="ms-auto text-xl font-bold">{data.title}</label>
            </div>
            <div className="flex">
              <label className="my-auto text-xl">Alternative Titles</label>
              <div className="ms-auto flex flex-col text-xl">
                <label className="ms-auto font-bold">
                  {data.alternative_titles.synonyms.length > 1 &&
                    `Synonyms: ${data.alternative_titles.synonyms[0]}`}
                </label>
                <label className="ms-auto font-bold">
                  {data.alternative_titles.en &&
                    `EN: ${data.alternative_titles.en}`}
                </label>
                <label className="ms-auto font-bold">
                  {data.alternative_titles.ja &&
                    `JA: ${data.alternative_titles.ja}`}
                </label>
              </div>
            </div>
            <div className="flex">
              <label className="text-xl">Start Date</label>
              <label className="ms-auto font-bold text-xl">
                {data.start_date}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">End Date</label>
              <label className="ms-auto font-bold text-xl">
                {data.end_date}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Score</label>
              <label className="ms-auto font-bold text-xl">{data.mean}</label>
            </div>
            <div className="flex">
              <label className="text-xl">Rank</label>
              <label className="ms-auto font-bold text-xl">#{data.rank}</label>
            </div>
            <div className="flex">
              <label className="text-xl">Popularity</label>
              <label className="ms-auto font-bold text-xl">
                #{data.popularity}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Media Type</label>
              <label className="ms-auto font-bold text-xl">
                {data.media_type}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Status</label>
              <label className="ms-auto font-bold text-xl">{data.status}</label>
            </div>
            <div className="flex">
              <label className="text-xl my-auto">Genres</label>
              <label className="ms-auto w-3/6 font-bold text-xl text-end">
                {data.genres.map((genre, index) => {
                  return `
                  ${genre.name}${data.genres.length - 1 !== index ? ", " : ""}
                  `;
                })}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Number Episodes</label>
              <label className="ms-auto font-bold text-xl">
                {data.num_episodes}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Start Season</label>
              <label className="ms-auto font-bold text-xl">{`${data.start_season.season} ${data.start_season.year}`}</label>
            </div>
            <div className="flex">
              <label className="text-xl">Average Episode Duration</label>
              <label className="ms-auto font-bold text-xl">
                {data.average_episode_duration / 60} mins
              </label>
            </div>
            <div className="flex">
              <label className="text-xl">Rating</label>
              <label className="ms-auto font-bold  text-xl">
                {data.rating}
              </label>
            </div>
            <div className="flex">
              <label className="text-xl my-auto">Studios</label>
              <label className="ms-auto font-bold  text-xl">
                {data.studios.map((studio, index) => {
                  return `${studio.name}${
                    data.studios.length - 1 !== index ? ", " : ""
                  }`;
                })}
              </label>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnimeDetail;
