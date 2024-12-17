import TopicCard from "./TopicCard";

const TopicList = ({ topics, loading }) => {
  return (
    <>
      {loading ? (
        <span className="loader"></span>
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
