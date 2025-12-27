import Post from './Post';

function Posts(props) {
  return (
    <ul>
      {props.posts.map((post) => (
        <Post key={post.id} author={post.author} body={post.body} />
      ))}
    </ul>
  );
}

export default Posts;
