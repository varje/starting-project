import Posts from './components/Posts';

const posts = [
  {id: 'p1', author: "Varje", body:"React.js is awesome!"},
  {id: 'p2', author: "Virve", body:"Check out the full course"}
]
function App() {
  return <main>
    <Posts posts={posts} />
  </main>;
}

export default App;
