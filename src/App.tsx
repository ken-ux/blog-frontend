import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { Post as PostProps } from "./types";
const apiUrl: string = import.meta.env.VITE_API_URL;

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl + "/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  return (
    <div className="my-16 grid grid-cols-8">
      <Navbar />
      <div className="col-span-6 p-8">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-2xl">Kenny's Blog</h1>
          <p>Hello, here's some posts served through my blog API!</p>
        </div>
        <Posts isLoading={isLoading} posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default App;
