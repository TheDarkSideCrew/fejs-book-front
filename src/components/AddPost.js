import { useState } from "react";

const AddPost = ({ onAdd }) => {
  const userId = 1;
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (message) {
      onAdd({ userId, message });
    }
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <label className="col-form-label" for="inputDefault"></label>
      <input
        type="text"
        className="form-control"
        placeholder="Write Your post here..."
        id="inputDefault"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Save Post
      </button>
    </form>
  );
};

export default AddPost;
