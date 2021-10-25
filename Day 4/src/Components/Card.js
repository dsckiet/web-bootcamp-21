import del from "../assets/delete.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card card-que">
        <div className="text-container">
          <h1>Yahan question aayega</h1>
        </div>
      </div>
      <img
        src={del}
        alt="del"
        id="del"
        width="24px"
        height="24px"
        className="del-icon"
      />
    </div>
  );
};

export default Card;
