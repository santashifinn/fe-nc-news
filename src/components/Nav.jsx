import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="nav-main">
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/topics">
        <button>TOPICS</button>
      </Link>
      <Link to="/add">
        <button>ADD</button>
      </Link>
      <Link to="/users">
        <button>USERS</button>
      </Link>
    </nav>
  );
};

export default Nav;
