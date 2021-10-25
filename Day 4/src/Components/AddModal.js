const AddModal = ({ toggleHide }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="heading">Add Question</div>
        <form className="form">
          <input type="text" name="que" placeholder="Question" />
          <br />
          <input type="text" name="ans" placeholder="Answer" />
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
