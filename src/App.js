import AddPost from "./components/AddPost";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
    .then(res => res.json())
    .then(res => setPosts(res))
  }, []);

  const addPost = (task) => {
    fetch(`http://localhost:8080/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
  };

  return (
    <div className="App">
      <AddPost onAdd={addPost} />
      {posts.length > 0 ? <Posts posts={posts} /> : "No Posts"}
    </div >
  );
}

export default App;
