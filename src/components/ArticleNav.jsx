import { useSearchParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getArticles } from "../api";

const ArticleNav = ({ topics, setArticles }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const limitQuery = searchParams.get("limit");
  const pageQuery = searchParams.get("p");

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    if (direction === 0) {
      newParams.set("order", "desc");
      setSearchParams(newParams);
    }
    if (direction === 1) {
      newParams.set("order", "asc");
      setSearchParams(newParams);
    }
  };

  const setLimit = (limit) => {
    const newParams = new URLSearchParams(searchParams);
    if (limit === 0) {
      newParams.set("limit", "10");
      setSearchParams(newParams);
    }
    if (limit === 1) {
      newParams.set("limit", "20");
      setSearchParams(newParams);
    }
    if (limit === 2) {
      newParams.set("limit", "30");
      setSearchParams(newParams);
    }
  };

  <Link to={{ pathname: "/my-route", search: "?myParam=myValue" }}></Link>;

  useEffect(() => {
    getArticles(
      topicQuery,
      sortByQuery,
      orderQuery,
      limitQuery,
      pageQuery
    ).then((response) => setArticles(response));
  }, [topicQuery, sortByQuery, orderQuery, limitQuery, pageQuery]);

  const handleChange = (event) => {
    const chosenParam = event.target.name;
    const chosenValue = event.target.value;
    setSearchParams({ [chosenParam]: chosenValue });
  };

  return (
    <nav className="article-nav">
      <label htmlFor="drop-topic">Topic: </label>
      <select
        id="drop-topic"
        name="topic"
        onChange={(event) => {
          handleChange(event);
        }}
      >
        <option key={0} value="">
          All
        </option>
        {topics.map((topic, index) => {
          return (
            <option key={index} value={topic.slug}>
              {topic.slug.charAt(0).toUpperCase() +
                topic.slug.slice(1).toLowerCase()}
            </option>
          );
        })}
      </select>
      <label htmlFor="drop-sort-by">Sort by: </label>
      <select
        id="drop-sort-by"
        name="sort_by"
        onChange={(event) => {
          handleChange(event);
        }}
      >
        <option value="created_at">Most recent</option> {/* created_at */}
        <option value="votes">Popular</option> {/* votes */}
        <option value="comment_count">Most commented</option>{" "}
        {/* comment_count */}
        <option value="author">Author</option> {/* author */}
        <option value="title">Title</option> {/* title */}
      </select>
      <label htmlFor="drop-order">Order: </label>
      <select
        id="drop-order"
        name="order"
        onChange={(event) => {
          setSortOrder(event.target.selectedIndex);
        }}
      >
        <option name="desc" value="desc" id="desc">
          Descending
        </option>
        <option name="asc" value="asc" id="asc">
          Ascending
        </option>
      </select>
      <label htmlFor="drop-limit">Limit: </label>
      <select
        id="drop-limit"
        name="limit"
        onChange={(event) => {
          setLimit(event.target.selectedIndex);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </nav>
  );
};

export default ArticleNav;
