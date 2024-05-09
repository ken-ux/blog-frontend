import { PostProps } from "../types";

function Post({ title, text, timestamp }: PostProps) {
  return (
    <div className="post">
      <h3 className="text-lg">{title}</h3>
      <p>{text}</p>
      <p>{timestamp}</p>
    </div>
  );
}

export default Post;
