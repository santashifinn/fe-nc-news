import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getVotesCount, updateArticleVotes } from "../api";

const Votes = () => {
  const { article_id } = useParams();

  const [votesCount, setVotesCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVotesCount(article_id).then((votesCount) => {
      setVotesCount(votesCount);
    });
  }, []);

  const handleVote = () => {
    setVotesCount((currentVotesCount) => currentVotesCount + 1);
    setError(null);
    updateArticleVotes(article_id).catch((err) => {
      setVotesCount((currentVotesCount) => currentVotesCount - 1);
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
        {votesCount}
      </button>
    </span>
  );
};

export default Votes;
