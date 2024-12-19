import { useEffect, useState } from "react";

import { updateCommentVotes } from "../api";

const CommentVotes = ({ comment }) => {
  const currentCommentVotes = comment.votes;
  const commentId = comment.comment_id;

  const [votesCountComments, setVotesCountComments] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setVotesCountComments(currentCommentVotes);
  }, []);

  const handleVote = () => {
    setVotesCountComments((currentVotesCount) => currentVotesCount + 1);
    setError(null);
    updateCommentVotes(commentId).catch((err) => {
      setVotesCountComments((currentVotesCount) => currentVotesCount - 1);
      setError(
        <span className="article-text-smol">
          ❤︎ failed to register! Please try again!
        </span>
      );
    });
  };

  return (
    <span className="article-text-smol">
      <button onClick={handleVote}>
        ❤︎ {error ? error : null}
        {votesCountComments}
      </button>
    </span>
  );
};

export default CommentVotes;
