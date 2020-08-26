import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <button>All</button>
      </Link>
      <Link to="/current">
        <button>Current</button>
      </Link>
      <Link to="/graduates">
        <button>Graduates</button>
      </Link>
    </nav>
  );
};

export default Nav;
