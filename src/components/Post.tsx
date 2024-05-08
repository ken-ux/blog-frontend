import { PostProps } from "../types";

function Post({ title, text }: PostProps) {
  return (
    <div>
      <h3 className="text-lg">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Post;
