import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { postArticle } from "../api";

const PostArticle = ({ topics }) => {
  const [newArticle, setNewArticle] = useState({
    author: "",
    title: "",
    body: "",
    topic: "",
    article_img_url: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postArticle(newArticle).catch((err) => {
      setError(
        <span className="article-text-smol">
          Article creation failed! Please try again!
        </span>
      );
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const handleReset = () => {
    setNewArticle({
      author: "",
      title: "",
      body: "",
      topic: "",
      article_img_url: "",
    });
  };

  return (
    <>
      <section className="comment-topic-add">
        <h3>Add Article ᯓ★</h3>

        <form className="comment-topic-form" onSubmit={handleSubmit}>
          <label htmlFor="article-author">Username: </label>
          <br />
          <input
            type="text"
            id="article-author"
            name="author"
            required
            onChange={handleChange}
            value={newArticle.author}
            placeholder="batty-mcbatface"
          ></input>
          <br />
          <label htmlFor="article-title">Title: </label>
          <br />
          <input
            type="text"
            id="article-title"
            name="title"
            required
            onChange={handleChange}
            value={newArticle.title}
            placeholder="I want to talk about bats!"
          ></input>
          <br />
          <label htmlFor="article-topic">Topic: </label>
          <br />
          <select
            id="article-topic"
            name="topic"
            required
            onChange={(event) => {
              handleChange(event);
            }}
            value={newArticle.topic}
          >
            {topics.map((topic, index) => {
              return (
                <option key={index}>
                  {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                </option>
              );
            })}
          </select>
          <br />
          <textarea
            id="article-body"
            name="body"
            required
            onChange={handleChange}
            value={newArticle.description}
            placeholder="Bats are fabulous - wouldn't you agree?"
          ></textarea>
          <br />
          <label htmlFor="article-article_img_url">Image URL: </label>
          <br />
          <input
            type="text"
            id="article-article_img_url"
            name="article_img_url"
            required
            onChange={handleChange}
            value={newArticle.slug}
            placeholder="https://bat-img-url.com/bat-image.png"
          ></input>
          <br />
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

export default PostArticle;
