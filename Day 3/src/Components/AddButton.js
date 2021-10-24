import plus from "../assets/plus.svg";

const AddButton = ({ color }) => {
  return (
    <div className="add-button" style={{ backgroundColor: color }}>
      <img src={plus} width="30px" height="30px" alt="add-button" />
    </div>
  );
};
export default AddButton;
