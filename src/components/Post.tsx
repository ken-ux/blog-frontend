import { Post as PostProps } from "../types";
import { useEffect } from "react";
import { useState } from "react";
const apiUrl: string = import.meta.env.VITE_API_URL;

function Post({ title, text, timestamp, id }: PostProps) {
  const [commentCount, setCommentCount] = useState(0);
  const date = new Date(timestamp).toLocaleDateString();

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`${apiUrl}/posts/${id}/comments`);
      const data = await response.json();
      setCommentCount(data.length);
    }
    getPosts();
  });

  return (
    <div className="rounded-lg border bg-white shadow-md" id={id}>
      <span className="post-header flex items-center gap-2 rounded-t-lg p-4 text-white">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm italic">(Posted: {date})</p>
      </span>
      <div className="p-4">
        <p>{text}</p>
        <p>Comments: {commentCount}</p>
      </div>
    </div>
  );
}

export default Post;
