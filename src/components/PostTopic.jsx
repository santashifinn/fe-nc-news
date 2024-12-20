import { useState, useEffect } from "react";
import { postTopic } from "../api";

const PostTopic = ({ topics, setTopics, setTopicFormHidden }) => {
  const [newTopic, setNewTopic] = useState({
    slug: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTopic({ ...newTopic, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postTopic(newTopic)
      //   .then((newTopic) => {
      //     setTopics((topics) => [newTopic, ...topics]);
      //   })
      .catch((err) => {
        setError(
          <span className="article-text-smol">
            Topic creation failed! Please try again!
          </span>
        );
      });
    setNewTopic({
      slug: "",
      description: "",
    });
  };

  const handleReset = () => {
    setNewTopic({
      slug: "",
      description: "",
    });
  };

  const handleXClick = () => {
    setTopicFormHidden(true);
  };

  return (
    <>
      <section className="comment-topic-add">
        <button className="x-button" onClick={handleXClick}>
          ✘
        </button>
        <h3>Add Topic ᯓ★</h3>

        <form className="comment-topic-form" onSubmit={handleSubmit}>
          <label htmlFor="topic-slug">Topic: </label>
          <br />
          <input
            type="text"
            id="topic-slug"
            name="slug"
            required
            onChange={handleChange}
            value={newTopic.slug}
            placeholder="Bats"
          ></input>
          <br />
          <label htmlFor="topic-description">Description: </label>
          <br />
          <textarea
            id="topic-description"
            name="description"
            required
            onChange={handleChange}
            value={newTopic.description}
            placeholder="Nocturnal winged wonders"
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

export default PostTopic;
