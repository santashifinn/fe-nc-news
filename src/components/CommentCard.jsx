import { prettyTimestamp } from "../utilities";

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="article-card">
        <span className="article-text-smol">
          {prettyTimestamp(comment.created_at)}
        </span>
        {" "}

        <span className="article-text-author">〜{comment.author}</span>
        <br />

        <br />
        <div className="article-text-body">{comment.body}</div>
        <br />

        <span className="article-text-smol">❤︎ {comment.votes}</span>
      </div>
    </>
  );
};

export default CommentCard;
