import { Post as PostProps } from "../types";
import { useEffect } from "react";
import { useState } from "react";
import { Comment as CommentProps } from "../types";
import { ChatBubbleOvalLeftIcon as ChatBubble } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon as ChatBubbleSolid } from "@heroicons/react/24/solid";
const apiUrl: string = import.meta.env.VITE_API_URL;

function Post({ title, text, timestamp, id }: PostProps) {
  const [comments, setComments] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const date = new Date(timestamp).toLocaleDateString();

  useEffect(() => {
    async function getComments() {
      const response = await fetch(`${apiUrl}/posts/${id}/comments`);
      const data = await response.json();
      setComments(data);
    }
    getComments();
  }, [id]);

  const clickHandler = () => {
    setCommentsOpen(!commentsOpen);
  };

  const commentList = comments.map((comment: CommentProps) => {
    return (
      <div key={comment._id} className="rounded-lg bg-slate-200 p-3">
        <p>{comment.text}</p>
        <div className="mt-2 flex gap-1 text-sm">
          <p>{comment.username},</p>
          <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="rounded-lg border bg-white shadow-md" id={id}>
      <span className="post-header flex items-center gap-2 rounded-t-lg p-4 text-white">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm italic">(Posted: {date})</p>
      </span>
      <div className="p-4">
        <p>{text}</p>
        <div className="mt-3 flex items-center gap-1">
          <button
            type="button"
            onClick={comments.length > 0 ? clickHandler : undefined}
          >
            {!commentsOpen ? (
              <ChatBubble className="h-6 w-6" />
            ) : (
              <ChatBubbleSolid className="h-6 w-6" />
            )}
          </button>
          <p>{comments.length}</p>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {!commentsOpen ? "" : commentList}
        </div>
      </div>
    </div>
  );
}

export default Post;
