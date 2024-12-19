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
      <section id="comment-add">
        <h3>Add ᯓ★</h3>

        <form id="comment-form" onSubmit={handleSubmit}>
          <label htmlFor="">Username: </label>
          <br />
          <input
            type="text"
            id="comment-username"
            name="username"
            required
            onChange={handleChange}
            value={newComment.username}
          ></input>
          <br />
          <label htmlFor="">Comment: </label>
          <br />
          <textarea
            id="comment-body"
            name="body"
            required
            onChange={handleChange}
            value={newComment.body}
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
