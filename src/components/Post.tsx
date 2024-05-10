import { PostProps } from "../types";

function Post({ title, text, timestamp }: PostProps) {
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <div className="post">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{text}</p>
      <p>Posted on: {date}</p>
    </div>
  );
}

export default Post;
