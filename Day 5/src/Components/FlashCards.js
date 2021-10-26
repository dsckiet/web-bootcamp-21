import { useState } from "react";
import AddButton from "./AddButton";
import AddModal from "./AddModal";
import Card from "./Card";

const FlashCards = () => {
  const color = "#0f9d58";
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      <div className="main-container">
        <AddButton color={color} toggleHide={toggleHide} />
        <div className="cards">
          <Card />
        </div>
      </div>
      {hide ? null : <AddModal toggleHide={toggleHide} />}
    </>
  );
};

export default FlashCards;
