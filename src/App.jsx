import PostsList from './components/PostsList';

const posts = [
  {id: 'p1', author: "Varje", body:"React.js is awesome!"},
  {id: 'p2', author: "Virve", body:"Check out the full course"}
]
function App() {
  return <main>
    <PostsList posts={posts} />
  </main>;
}

export default App;
