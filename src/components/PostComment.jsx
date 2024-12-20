import { redirect, useParams } from "react-router";
import { useState } from "react";
import { postComment } from "../api";

const PostComment = ({ comments, setComments }) => {
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(newComment, article_id)
      // .then((newComment) => {
      //   setComments((comments) => [newComment, ...comments]);
      // })
      .catch((err) => {
        setError(
          <span className="article-text-smol">
            Post failed! Please try again!
          </span>
        );
      });

    setNewComment({
      username: "",
      body: "",
    });
    // setTimeout(() => {
    //   redirect(`/articles/${article_id}`);
    // }, 1000);
  };

  const handleReset = () => {
    setNewComment({
      username: "",
      body: "",
    });
  };

  return (
    <>
      <section className="comment-topic-add">
        <h3>Add Comment ᯓ★</h3>

        <form className="comment-topic-form" onSubmit={handleSubmit}>
          <label htmlFor="comment-username">Username: </label>
          <br />
          <input
            type="text"
            id="comment-username"
            name="username"
            required
            onChange={handleChange}
            value={newComment.username}
            placeholder="batty-mcbatface"
          ></input>
          <br />
          <label htmlFor="comment-body">Comment: </label>
          <br />
          <textarea
            id="comment-body"
            name="body"
            required
            onChange={handleChange}
            value={newComment.body}
            placeholder="I think bats would really be into this."
          ></textarea>
          <br />
          <button type="submit">SUBMIT</button>{" "}
          <button type="reset" onClick={handleReset}>
            RESET
          </button>
        </form>
      </section>
    </>
  );
};

export default PostComment;
