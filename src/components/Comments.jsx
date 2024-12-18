import CommentCard from "./CommentCard";

const Comments = ({ comments, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div>
          <h2 id="comments-here">Comments ⊹˖𓂃 ࣪ ִֶָ🦇་༘࿐</h2>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </div>
      )}
    </>
  );
};

export default Comments;