import { prettyTimestamp } from "../utilities";
import { Link } from "react-router";
import CommentVotes from "./CommentVotes";
import CommentDelete from "./CommentDelete";

const CommentCard = ({ comment }) => {
  return (
    <>
      <div className="article-card">
        <span className="article-text-smol">
          {prettyTimestamp(comment.created_at)}
        </span>{" "}
        <Link to={"/users"}>
          <span className="article-text-author">↪ {comment.author}</span>
        </Link>
        <br />
        <br />
        <div className="article-text-body">{comment.body}</div>
        <br />
        <CommentVotes comment={comment} /> <CommentDelete comment={comment} />
      </div>
    </>
  );
};

export default CommentCard;
