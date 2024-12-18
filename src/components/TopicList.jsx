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
          {topics.map((topic, index) => {
            return <TopicCard key={index} topic={topic} />;
          })}
        </div>
      )}
    </>
  );
};

export default TopicList;
