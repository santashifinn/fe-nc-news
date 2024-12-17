import axios from "axios";

const api = axios.create({
  baseURL: "https://pips-nc-news.onrender.com/api",
});

const getArticles = (topic, sort_by, order, limit, p) => {
  let url = `/articles`;

  if (topic) {
    url += `&topic=${topic}`;
  }
  if (sort_by) {
    url += `&sort_by=${sort_by}`;
  }
  if (order) {
    url += `&order=${order}`;
  }
  if (limit) {
    url += `&limit=${limit}`;
  }
  if (p) {
    url += `&p=${p}`;
  }

  return api.get(url).then(({ data: { articles } }) => {
    return articles;
  });
};

const getTopics = () => {
  return api.get("/topics", {}).then(({ data: { topics } }) => {
    return topics;
  });
};

const getArticlebyId = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

const getCommentsbyArticleId = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export { getArticles, getTopics, getArticlebyId, getCommentsbyArticleId };
