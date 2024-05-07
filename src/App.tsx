// import { useEffect } from "react";

function App() {
  return (
    <div className="grid grid-cols-8">
      <nav className="col-span-2 col-start-7 row-start-1">Sidebar</nav>
      <div className="col-span-6">
        <h1 className="text-2xl">Kenny's Blog</h1>
        <h2 className="text-xl">Posts</h2>
        <p>Sort</p>
        <p>Posts go here</p>
      </div>
    </div>
  );
}

export default App;
