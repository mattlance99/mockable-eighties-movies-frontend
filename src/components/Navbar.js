import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/movies">Movies</Link>
    </li>
    <li>
      <Link to="/movies/new">Add a Movie</Link>
    </li>
  </ul>
);

export default Navbar;
