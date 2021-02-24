import AddPost from "./components/AddPost";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const taskFromServer = await getAllPosts();
      setPosts(taskFromServer);
    };
    getPosts();
  }, []);

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

  const addUser = async () => {
    const res = await fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Amelia",
        lastName: "Wright",
        login: "ameliawright",
        email: "awright@example.com"
      }),
    });
    await res.json();
  };

  return (
    <div className="App">
      <AddPost onAdd={addPost} />
      {posts.length > 0 ? <Posts posts={posts} /> : "No Posts"}
    </div >
  );
}

export default App;
