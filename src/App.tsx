import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="grid grid-cols-8">
      <Navbar />
      <div className="col-span-6">
        <h1 className="text-2xl">Kenny's Blog</h1>
        <Posts />
      </div>
    </div>
  );
}

export default App;
