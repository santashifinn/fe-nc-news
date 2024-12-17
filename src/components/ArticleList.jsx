import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, loading }) => {
  return (
    <section className="article-list">
      <div className="page-select-1">
        <p>◀ 1, 2 ... ▶</p>
      </div>

      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}

      <div className="page-select-2">
        <p>◀ 1, 2 ... ▶</p>
      </div>
    </section>
  );
};

export default ArticleList;
