import axios from "axios";

const api = axios.create({
  baseURL: "https://pips-nc-news.onrender.com/api",
});

const getArticles = (topic, sort_by, order, limit, p) => {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order,
        limit: limit,
        p: p,
      },
    })
    .then(({ data: { articles } }) => {
      console.dir(articles);
      return articles;
    });
};

const getTopics = () => {
  return api.get("/topics", {}).then(({ data: { topics } }) => {
    return topics;
  });
};

const getUsers = () => {
  return api.get("/users", {}).then(({ data: { users } }) => {
    return users;
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

const getVotesCount = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article.votes;
  });
};

const updateArticleVotes = (article_id) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

const updateCommentVotes = (comment_id) => {
  return api.patch(`/comments/${comment_id}`, { inc_votes: 1 });
};

const postComment = (newComment, article_id) => {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data: { comment } }) => comment);
};

const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

const postTopic = (newTopic) => {
  return api.post(`/topics`, newTopic).then(({ data: { topic } }) => topic);
};

const postArticle = (newArticle) => {
  return api
    .post(`/articles`, newArticle)
    .then(({ data: { article } }) => article);
};

// api.interceptors.response.use(
//   (response) => response,
//   (err) => {
//     if (err.response && err.response.status === 404) {
//       console.log("hi")
//     }
//     return Promise.reject(err);
//   }
// );

export {
  getArticles,
  getTopics,
  getUsers,
  getArticlebyId,
  getCommentsbyArticleId,
  getVotesCount,
  updateArticleVotes,
  updateCommentVotes,
  postComment,
  postTopic,
  postArticle,
  deleteComment,
};
