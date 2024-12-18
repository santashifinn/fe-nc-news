import { Link } from "react-router";

import { prettyTimestamp } from "../utilities";

const ArticleCard = ({ article }) => {
  return (
    <>
      <div className="article-list-card">
        <p>
          <Link to={`/articles?topic=${article.topic}`}>
            <span className="article-text-smol">/{article.topic}</span>
          </Link>{" "}
          <span className="article-text-smol">
            {prettyTimestamp(article.created_at)}
          </span>
          <br />
          <Link to={`/articles/${article.article_id}`}>
            <span className="article-text-title">{article.title}</span>
          </Link>
          <Link to={`/users/${article.author}`}>
            <span className="article-text-author">〜{article.author}</span>
          </Link>
          <br />
          <Link to={`/articles/${article.article_id}`}>
            <span className="article-list-card-image">
              <img src={article.article_img_url} alt="description here" />
            </span>
          </Link>
          <br />
          <Link
            to={{
              pathname: `/articles/${article.article_id}`,
              hash: "#comments-here",
            }}
          >
            <span className="article-text-smol">
              💬 {article.comment_count}
            </span>
          </Link>{" "}
          <span className="article-text-smol">❤︎ {article.votes}</span>
        </p>
      </div>
    </>
  );
};

export default ArticleCard;
