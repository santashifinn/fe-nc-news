import { Link } from "react-router";

const SingleArticleCard = ({article}) => {
  return (
    <>
      <div className="article-card">
        <p>
          <span className="article-text-smol">/{article.topic}</span>{" "}
          <span className="article-text-smol">
            {article.created_at /* .split("T")[0] */}
          </span>
          <br />
          <span className="article-text-title">{article.title}</span>
          <span className="article-text-author">〜{article.author}</span>
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
          <span className="article-text-smol">❤︎ {article.votes}</span>
        </p>
      </div>
    </>
  );
};

export default SingleArticleCard;
