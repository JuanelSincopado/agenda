import data from "../../data/data";
import HeaderHome from "./components/header";
import "./css/home.css";

const HomeView = () => {
  return (
    <div className="background-container">
      <div className="overlay"></div>
      <div className="content">
        <HeaderHome />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="mb-4 break-inside-avoid rounded-lg p-4 text-white flex flex-col justify-center items-center sm:cursor-pointer sm:hover:-translate-y-1 sm:hover:shadow-lg transition-transform duration-300"
              style={{
                backgroundColor: item.color,
                height: item.height,
              }}
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
