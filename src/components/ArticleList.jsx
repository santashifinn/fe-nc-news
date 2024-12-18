import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <section className="article-list">
          <div className="page-select-1">
            <p>◀ 1, 2 ... ▶</p>
          </div>
          <div className="article-list-display">
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </div>
          <div className="page-select-2">
            <p>◀ 1, 2 ... ▶</p>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticleList;
