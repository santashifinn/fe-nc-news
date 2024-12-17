const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="article-card">
        <p>
          <span className="article-text-smol">
            {comment.created_at /* .split("T")[0] */}
          </span>
          <br />

          <span className="article-text-author">〜{comment.author}</span>
          <br />

          <br />
          <div className="article-text-body">{comment.body}</div>
          <br />

          <span className="article-text-smol">❤︎ {comment.votes}</span>
        </p>
      </div>
    </>
  );
};

export default CommentCard;
