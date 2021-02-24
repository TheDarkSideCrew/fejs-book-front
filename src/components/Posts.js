import Post from "./Post";

const ShowPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </>
  );
};

export default ShowPosts;
