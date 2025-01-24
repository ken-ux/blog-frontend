import { Navbar as NavbarProps, Post as PostProps } from "../types";

function Navbar({ posts }: NavbarProps) {
  const postList = posts.map((post: PostProps) => {
    if (!post.published) {
      return;
    }
    return (
      <li
        key={post._id}
        className="list-outside list-disc transition-all hover:text-slate-50/60"
      >
        <a href={"#" + post._id}>{post.title}</a>
      </li>
    );
  });

  return (
    <nav className="col-span-2 col-start-7 row-start-1 m-8 flex hidden flex-col gap-2 rounded-lg border p-8 text-slate-50 md:block">
      <h1 className="text-xl font-semibold">Jump to Post</h1>
      <ul className="list-inside">{postList}</ul>
    </nav>
  );
}

export default Navbar;
