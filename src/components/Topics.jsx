import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicList from "./TopicList";

const Topics = ({ topics, setTopics }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <TopicList topics={topics} setTopics={setTopics} loading={loading} />
    </>
  );
};

export default Topics;
