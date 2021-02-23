import AddPost from "./components/AddPost";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const taskFromServer = await getAllPosts();
      setPosts(taskFromServer);
    };
    getPosts();
  }, []);

  // Fetch Tasks
  const getAllPosts = async () => {
    const res = await fetch("http://localhost:8080/posts");
    const data = await res.json();

    return data;
  };

  const addPost = async (task) => {
    const res = await fetch(`http://localhost:8080/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };

  return (
    <div className="App">
      <AddPost onAdd={addPost} />
    </div>
  );
}

export default App;
