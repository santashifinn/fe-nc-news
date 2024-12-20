import { useEffect, useState } from "react";
import { deleteComment } from "../api";

const CommentDelete = ({ comment, comments, setComments }) => {
  const [user, setUser] = useState("weegembump");
  const [permittedUser, setPermittedUser] = useState(false);
  const [error, setError] = useState(null);

  const commentToDelete = comment.comment_id;

  useEffect(() => {
    if (comment.author === user) {
      setPermittedUser(true);
    }
  }, []);

  const handleDelete = () => {
    const filteredComments = comments.filter(
      (commentToDelete) => commentToDelete.comment_id !== comment.comment_id
    );
    setComments([...filteredComments]);
    deleteComment(comment.comment_id).catch((err) => {
      setError(
        <span className="article-text-smol">
          Comment not deleted! Please try again!
        </span>
      );
    });
  };

  return (
    <>
      {permittedUser ? (
        <span className="article-text-smol-delete">
          <button onClick={handleDelete}>
            ✘ DELETE {error ? error : null}
          </button>
        </span>
      ) : null}
    </>
  );
};

export default CommentDelete;
