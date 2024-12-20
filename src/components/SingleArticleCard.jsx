import { Link } from "react-router";

import { prettyTimestamp } from "../utilities";
import Votes from "./Votes";

const SingleArticleCard = ({ article, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="article-card">
          <Link to={`/articles?topic=${article.topic}`}>
            <span className="article-text-smol">
              {"/"}
              {article.topic}
            </span>
          </Link>{" "}
          <span className="article-text-smol">{article.created_at}</span>
          <br />
          <span className="article-text-title">{article.title}</span>
          <Link to={"/users"}>
            <span className="article-text-author">
              {"↪ "}
              {article.author}
            </span>
          </Link>
          <br />
          <span className="article-card-image">
            <img src={article.article_img_url} alt="description here" />
          </span>
          <br />
          <div className="article-text-body">{article.body}</div>
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
          <Votes article={article} />
        </div>
      )}
    </>
  );
};

export default SingleArticleCard;
