import { useState } from "react";
import Post from "./Post";
import { Post as PostProps } from "../types";
import { Posts as PostsProps } from "../types";

function Posts({ isLoading, posts, setPosts }: PostsProps) {
  const [sortDescending, setSortDescending] = useState(true);

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
          id={post._id}
        />
      );
    });
  }

  const clickHandler = () => {
    if (!isLoading) {
      const newPosts = posts;
      newPosts.sort((a: PostProps, b: PostProps) =>
        sortDescending
          ? new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
          : new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf(),
      );
      setSortDescending(!sortDescending);
      setPosts(newPosts);
    }
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
