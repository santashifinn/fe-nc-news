import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlebyId, getCommentsbyArticleId } from "../api";
import SingleArticleCard from "./SingleArticleCard";
import Comments from "./Comments";

const SingleArticle = () => {
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticlebyId(article_id).then((fetchedArticle) => {
      setArticle(fetchedArticle);
      setLoading(false);
    });
    getCommentsbyArticleId(article_id).then((fetchedComments) => {
      setComments(fetchedComments);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <SingleArticleCard article={article} loading={loading} />

      <Comments comments={comments} loading={loading} />
    </>
  );
};

export default SingleArticle;
