import { useNavigate } from "react-router-dom";
import data from "../../data/data";
import HeaderHome from "./components/header";
import "./css/home.css";

const HomeView = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="background-container">
      <img
        className="z-10 w-full absolute top-0 left-0 h-full object-cover"
        src="images/image-bg.png"
        alt="bg"
      />
      <div className="overlay z-20"></div>
      <div className="content z-30 relative">
        <HeaderHome />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-5 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="mb-4 break-inside-avoid rounded-lg p-4 text-white flex flex-col justify-center items-center sm:cursor-pointer sm:hover:-translate-y-1 sm:hover:shadow-lg transition-transform duration-300"
              style={{
                backgroundColor: item.color,
                height: item.height,
              }}
              onClick={() => handleClick(item.id)}
            >
              <p className="text-center">{item.text}</p>
              <img
                src={`icons/${item.icono}`}
                alt="icono"
                className="w-10 mt-2"
                style={{ filter: "invert(1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
