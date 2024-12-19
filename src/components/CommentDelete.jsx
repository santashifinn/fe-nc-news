import { useEffect, useState } from "react";
import { deleteComment } from "../api";

const CommentDelete = ({ comment }) => {
  const [user, setUser] = useState("weegembump");
  const [permittedUser, setPermittedUser] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (comment.author === user) {
      setPermittedUser(true);
    }
  }, []);

  const handleDelete = () => {
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
