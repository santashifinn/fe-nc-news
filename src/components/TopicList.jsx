import TopicCard from "./TopicCard";

const TopicList = ({ topics, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="topic-list">
          <h2>Topics</h2>
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
