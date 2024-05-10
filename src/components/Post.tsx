import { Post as PostProps } from "../types";

function Post({ title, text, timestamp, id }: PostProps) {
  const date = new Date(timestamp).toLocaleDateString();

  return (
    <div className="rounded-lg border bg-white shadow-md" id={id}>
      <span className="post-header flex items-center gap-2 rounded-t-lg p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm italic">(Posted: {date})</p>
      </span>
      <p className="p-4">{text}</p>
    </div>
  );
}

export default Post;
