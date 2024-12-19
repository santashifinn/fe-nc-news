import { useEffect, useState } from "react";

import { updateArticleVotes } from "../api";

const ArticleListVotes = ({ article }) => {
  const currentArticleVotes = article.votes;
  const articleId = article.article_id;

  const [votesCountArticles, setVotesCountArticles] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setVotesCountArticles(currentArticleVotes);
  }, []);

  const handleVote = () => {
    setVotesCountArticles((currentVotesCount) => currentVotesCount + 1);
    setError(null);
    updateArticleVotes(articleId).catch((err) => {
      setVotesCountArticles((currentVotesCount) => currentVotesCount - 1);
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
        {votesCountArticles}
      </button>
    </span>
  );
};

export default ArticleListVotes;
