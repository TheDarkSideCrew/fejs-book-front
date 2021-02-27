import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Posts;
