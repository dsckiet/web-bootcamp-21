import { useState } from "react";
import del from "../assets/delete.svg";

const Card = () => {
  const [flip, setFlip] = useState(true);
  return (
    <>
      <div className="card-container">
        <div
          className={`card card-que ${flip ? "anti-flip" : "flip"} `}
          onClick={() => setFlip(!flip)}
        >
          <div className="text-container">question</div>
          <img
            id="del"
            src={del}
            alt="delete"
            width="24px"
            height="24px"
            className={`del-icon`}
          />
        </div>
        <div
          className={`card card-ans ${flip ? "flip" : "anti-flip"}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="text-container">answer</div>
          <img
            id="del"
            src={del}
            alt="delete"
            width="24px"
            height="24px"
            className={`del-icon`}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
