import { Post as PostProps } from "../types";

function Post({ title, text, timestamp, id }: PostProps) {
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <div className="post" id={id}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{text}</p>
      <p>Posted on: {date}</p>
    </div>
  );
}

export default Post;
