import { useParams } from "react-router-dom";
import "./css/details.css";
import data from "../../data/details";
import { useEffect, useState } from "react";

const DetailsView = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContent = () => {
    const content = data.find((item) => item.id === parseInt(id));

    if (content.type === "list") {
      setContent({
        ...content,
        content: content.content.split("~"),
      });
      console.log(content);

      setLoading(false);
      return;
    }

    setContent(content);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="datails__container">
      <img className="img-details" src="../images/bg-details.png" alt="asd" />
      <div className="overlay2"></div>
      <div className="title-container">
        <p className="title">{content.text}</p>
        <img
          src={`../icons/${content.icono}`}
          alt="icono"
          className="w-10 mt-2"
          style={{ filter: "invert(1)" }}
        />
      </div>

      {content.type === "list" ? (
        <ul className="list">
          {content.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="list">{content.content}</p>
      )}
    </div>
  );
};

export default DetailsView;
