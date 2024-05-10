import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="grid grid-cols-8 my-16">
      <Navbar />
      <div className="col-span-6 p-8">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl">Kenny's Blog</h1>
          <p>Hello, here's some posts served through my blog API!</p>
        </div>
        <Posts />
      </div>
    </div>
  );
}

export default App;
