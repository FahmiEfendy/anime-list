import { useNavigate } from "react-router-dom";

const SliderItem = ({ data }) => {
  const navigate = useNavigate();

  const movieDetailHandler = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div
      className="mr-3 cursor-pointer"
      style={{ minWidth: "15rem" }}
      onClick={() => movieDetailHandler(data.id)}
    >
      <img
        src={data.main_picture.medium}
        alt={data.title}
        className="rounded-xl h-3/4 object-contain shadow-lg"
      />
      <div className="text-lg font-medium mt-3">{data.title}</div>
      <div className="text-sm">
        {data.alternative_titles?.en || data.alternative_titles?.ja}
      </div>
    </div>
  );
};

export default SliderItem;
