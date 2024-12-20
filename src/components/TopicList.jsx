import { useState } from "react";
import PostTopic from "./PostTopic";
import TopicCard from "./TopicCard";

const TopicList = ({ topics, setTopics, loading }) => {
  const [topicFormHidden, setTopicFormHidden] = useState(true);

  const showForm = () => {
    setTopicFormHidden(false);
  };

  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="topic-list">
          <h2>Topics</h2>

          <div id="add-topic">
            {topicFormHidden ? (
              <button id="add-topic-button" type="button" onClick={showForm}>
                ADD TOPIC
              </button>
            ) : (
              <PostTopic
                topics={topics}
                setTopics={setTopics}
                setTopicFormHidden={setTopicFormHidden}
              />
            )}
          </div>

          <div className="user-list-display">
            {topics.map((topic, index) => {
              return <TopicCard key={index} topic={topic} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TopicList;
