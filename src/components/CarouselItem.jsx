import StringLimitter from "../utils/StringLimitter";

const CarouselItem = ({ data }) => {
  const movieDetailHandler = (id) => {
    console.log(id);
  };

  return (
    <div
      key={data.id}
      className="cursor-pointer"
      style={{ minWidth: "100%" }}
      onClick={() => movieDetailHandler(data.id)}
    >
      {/* TODO: Black Gradient (Black -> Transparent) */}
      <div className="absolute bg-black h-full w-full opacity-40 rounded-bl-3xl rounded-br-3xl" />
      <img
        src={data.main_picture.large}
        alt={data.title}
        style={{
          width: "100%",
          height: "40rem",
        }}
        className="rounded-bl-3xl rounded-br-3xl object-cover"
      />
      <div className="absolute top-0 w-full text-white ml-20 py-32 ">
        <p className="text-5xl font-bold mb-3 w-3/6">{data.title}</p>
        <p className="text-3xl font-medium">
          {data.alternative_titles.en || data.alternative_titles.ja}
        </p>
        <div className="mt-5 mb-6">
          <span className="bg-black rounded-2xl py-2 px-4 mr-2">
            {`Rated ${data.rating.toUpperCase()}`}
          </span>
          <span className="bg-black rounded-2xl py-2 px-4">
            {`Score ${data.mean}`}
          </span>
        </div>
        <p className="text-2xl w-3/6 leading-10">
          {StringLimitter(data.synopsis)}
        </p>
        <div className="mt-5 mb-6">
          {data.genres.map((genre) => {
            return (
              <span
                key={genre.id}
                className="bg-black rounded-2xl py-2 px-4 mr-2"
              >
                {genre.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
