import { PostListProps } from "../../types/Post";
import styles from "./PostList.module.css";



function PostList({ posts }: PostListProps) {
  console.log(posts);

  if (!posts || posts.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <li key={post.id} className={styles.postItem}>
          <h2 className={styles.postTitle}>{post.title}</h2>
          <p className={styles.postBody}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
