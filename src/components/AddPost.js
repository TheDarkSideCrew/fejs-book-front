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
    <form className="add-post" onSubmit={onSubmit}>
      <div>
        <label>Add Post: </label>
        <input
          type="text"
          placeholder="Post..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Post" />
    </form>
  );
};

export default AddPost;
