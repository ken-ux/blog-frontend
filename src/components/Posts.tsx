import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { PostProps } from "../types";
const apiUrl: string = import.meta.env.VITE_API_URL;

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDescending, setSortDescending] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl + "/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }
    getPosts();
  }, []);

  let postList;
  if (isLoading) {
    postList = "Posts loading...";
  } else {
    postList = posts.map((post: PostProps) => {
      // if (!post.published) {
      //   return;
      // }
      return (
        <Post
          key={post._id}
          title={post.title}
          text={post.text}
          timestamp={post.timestamp}
        />
      );
    });
  }

  const clickHandler = () => {
    const newPosts = posts;
    newPosts.sort((a: PostProps, b: PostProps) =>
      sortDescending
        ? new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf()
        : new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf(),
    );
    setSortDescending(!sortDescending);
    setPosts(newPosts);
  };

  return (
    <>
      <div className="mb-2 flex items-center gap-4">
        <h2 className="text-2xl">Posts</h2>
        <button
          type="button"
          className="rounded-full bg-sky-500 px-3 py-1 text-sm text-slate-50"
          onClick={clickHandler}
        >
          {sortDescending ? "Sort Date ▼" : "Sort Date ▲"}
        </button>
      </div>

      <div className="flex flex-col gap-4">{postList}</div>
    </>
  );
}

export default Posts;
