interface CommentProps {
  name: string;
  body: string;
}

const CommentItem = ({ name, body }: CommentProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Comment: {body}</p>
      <hr />
    </div>
  );
};

export default CommentItem;
