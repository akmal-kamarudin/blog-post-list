function Blog(props) {
  const content = props.posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });
  return <div>{content}</div>;
}

function Post(props) {
  const { id, title, content } = props.post;
  return (
    <div>
      <h1>
        {id}. {title}
      </h1>
      <blockquote>
        <p>{content}</p>
      </blockquote>
    </div>
  );
}

export default Blog;
