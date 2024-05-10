export interface Post {
  title: string;
  text: string;
  timestamp: string;
  published?: boolean;
  _id?: string;
}

export interface Posts {
  isLoading: boolean;
  posts: Array<Post>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
