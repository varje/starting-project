import Post from './Post';
import classes from './PostsList.module.css';

function PostsList(props) {
  return (
    <ul className={classes.posts}>
      {props.posts.map((post) => (
        <Post key={post.id} author={post.author} body={post.body} />
      ))}
    </ul>
  );
}

export default PostsList;
