import { Link } from "react-router";

const TopicCard = ({ topic }) => {
  return (
    <>
      <div className="topic-card">
        <Link to={`/articles?topic=${topic.slug}`}>
          <h3>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</h3>
        </Link>

        <p>{topic.description}</p>
      </div>
    </>
  );
};

export default TopicCard;
