import { useState } from "react";

const AddModal = ({ toggleHide }) => {
  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");

  // console.log(que);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(que, ans);
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="heading">Add Question</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="que"
            placeholder="Question"
            value={que}
            onChange={(e) => setQue(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="ans"
            placeholder="Answer"
            value={ans}
            onChange={(e) => setAns(e.target.value)}
          />
          <br />
          <div className="btn-container">
            <button className="btn btn-submit" type="submit">
              Submit
            </button>
            <button className="btn btn-cancel" onClick={toggleHide}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
