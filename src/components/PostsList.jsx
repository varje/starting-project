import Post from './Post';
import classes from './PostsList.module.css';

function PostsList(props) {
  return (
    <ul className={classes.posts}>
      <Post author="Varje" body="React.js is awesome!" />
      <Post author="Virve" body="Check out the full course" />
    </ul>
  );
}

export default PostsList;
