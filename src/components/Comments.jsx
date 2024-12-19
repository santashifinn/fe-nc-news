import { useState } from "react";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

const Comments = ({ comments, setComments, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div>
          <h2 id="comments-here">Comments ⊹˖𓂃 ࣪ ִֶָ🦇་༘࿐</h2>
          <PostComment comments={comments} setComments={setComments} />
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </div>
      )}
    </>
  );
};

export default Comments;
