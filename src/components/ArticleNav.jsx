import { useSearchParams, useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { getArticles } from "../api";

const ArticleNav = ({ topics }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [searchQuery, setSearchQuery] = useState(searchParams.get())

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
  }

  <Link to={{ pathname: "/my-route", search: "?myParam=myValue" }}></Link>;

  useEffect(() => {
    getArticles(topicQuery, sortByQuery, orderQuery, limitQuery, pageQuery);
  }, [topicQuery, sortByQuery, orderQuery, limitQuery, pageQuery]);

  const [selectedTopic, setSelectedTopic] = useState([]);

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
        {topics.map((topic, index) => {
          return (
            <option key={index}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </option>
          );
        })}
      </select>
      <label htmlFor="drop-sort-by">Sort by: </label>
      <select id="drop-sort-by" name="sort-by">
        <option>Most recent</option> {/* created_at */}
        <option>Popular</option> {/* votes */}
        <option>Most commented</option> {/* comment_count */}
        <option>Author</option> {/* author */}
        <option>Title</option> {/* title */}
      </select>
      <label htmlFor="drop-order">Order: </label>
      <select
        id="drop-order"
        name="order"
        onChange={(event) => {
          // console.dir(event.target)
          setSortOrder(event.target.selectedIndex);
        }}
      >
        <option name="desc" id="desc">
          Descending
        </option>
        <option name="asc" id="asc">
          Ascending
        </option>
      </select>
      <label htmlFor="drop-limit">Limit: </label>
      <select id="drop-limit" name="limit">
        <option>5</option>
        <option>10</option>
      </select>
    </nav>
  );
};

export default ArticleNav;
