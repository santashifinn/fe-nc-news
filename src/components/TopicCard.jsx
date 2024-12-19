import { Link, useSearchParams } from "react-router";

const TopicCard = ({ topic }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");

  return (
    <>
      <div className="topic-card">
        <Link
          to={{
            pathname: "/articles",
            search: `?topic=${topic.slug}`,
          }}
        >
          <h3>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</h3>
        </Link>

        <p>{topic.description}</p>
      </div>
    </>
  );
};

export default TopicCard;
