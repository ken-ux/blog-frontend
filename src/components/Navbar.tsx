import { Navbar as NavbarProps } from "../types";
import { Post as PostProps } from "../types";

function Navbar({ posts }: NavbarProps) {
  return (
    <nav className="col-span-2 col-start-7 row-start-1 p-8">
      <h1 className="text-xl">Navigation</h1>
      <ul>
        {posts.map((post: PostProps) => {
          return (
            <li key={post._id}>
              <a href={"#" + post._id}>{post.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
