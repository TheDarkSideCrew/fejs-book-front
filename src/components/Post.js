const Post = ({ post }) => {
  return (
    <div className="card border-dark mb-3" style={{ maxWidth: "200rem" }}>
      <div className="card-header">User {post.userId}</div>
      <div className="card-body">
        <h6 className="card-title">{post.createdAt}</h6>
        <p className="card-text">{post.message}</p>
      </div>
    </div>
  );
};

export default Post;
