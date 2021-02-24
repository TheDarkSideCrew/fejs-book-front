import { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [userId, setUserId] = useState(1);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      alert("Please add post");
      return;
    }

    onAdd({ userId, message });

    setUserId(1);
    setMessage("");
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
