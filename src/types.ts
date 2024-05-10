export interface Post {
  title: string;
  text: string;
  timestamp: string;
  id: string | undefined;
  _id?: string;
  published?: boolean;
}

export interface Posts {
  isLoading: boolean;
  posts: Array<Post>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export interface Navbar {
  posts: Array<Post>;
}
