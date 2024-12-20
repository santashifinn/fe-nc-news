import { useEffect, useState } from "react";

import { getArticles, getTopics } from "../api";
import ArticleList from "./ArticleList";
import ArticleNav from "./ArticleNav";

const Articles = ({ topics, setTopics }) => {
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
      setLoading(false);
    });
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div>
      <ArticleNav topics={topics} setArticles={setArticles} />
      <ArticleList articles={articles} loading={loading} />
    </div>
  );
};

export default Articles;
