import { useState } from "react";
import { Routes, Route, useRoutes } from "react-router";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Articles from "./Articles";
import Topics from "./Topics";
import SingleArticle from "./SingleArticle";
import PostArticle from "./PostArticle";
import Users from "./Users";

function App() {
  const [topics, setTopics] = useState([]);

  let element = useRoutes([
    { path: "/", element: <Articles topics={topics} setTopics={setTopics} /> },
    {
      path: "/articles",
      element: <Articles topics={topics} setTopics={setTopics} />,
    },
    {
      path: "/topics",
      element: <Topics topics={topics} setTopics={setTopics} />,
    },
    {
      path: "/add",
      element: <PostArticle />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/articles/:article_id",
      element: <SingleArticle />,
    },
  ]);

  return (
    <>
      <Header />
      <Nav />
      {element}
      {/* <Routes>
        <Route
          path="/"
          element={<Articles topics={topics} setTopics={setTopics} />}
        />
        <Route
          path="/topics"
          element={<Topics topics={topics} setTopics={setTopics} />}
        />
        <Route path="/add" element={<PostArticle />} />
        <Route path="/users" element={<Users />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
