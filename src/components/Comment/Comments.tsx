import { useEffect, useState } from "react";
import { fetchComments } from "../../services/FetchComments";
import { Comment } from "../../types/Comment";
import CommentItem from "./CommentItem";

const Comments = () => {
  const [comments, setComments] = useState<Comment[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    loadComments();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!comments) {
    return <p>No comments available.</p>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentItem key={comment.id} name={comment.name} body={comment.body} />
      ))}
    </div>
  );
};

export default Comments;
