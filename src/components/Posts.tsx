import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import { PostProps } from "../types";

function Posts() {
  const apiUrl: string = import.meta.env.VITE_API_URL;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(apiUrl + "/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }
    getPosts();
  }, [apiUrl]);

  let postList;
  if (isLoading) {
    postList = "Posts loading...";
  } else {
    console.log(posts);
    postList = posts.map((post: PostProps) => {
      return <Post title={post.title} text={post.text} key={post._id} />;
    });
  }

  return (
    <>
      <h2 className="text-xl">Posts</h2>
      <p>Sort</p>
      <div>{postList}</div>
    </>
  );
}

export default Posts;
