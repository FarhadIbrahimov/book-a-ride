import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Nav.css";
import BookPage from "../pages/AuthPages/BookPage";

function AuthNavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <a onClick={() => navigate(`/loading`)}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate(`/login`)}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate(`/register`)}>SignUp</a>
          </li>
          <li className="services">
            <a>About</a>
            <ul className="dropdown">
              <li>
                <a onClick={() => navigate(`/book`)}>Book Page </a>
              </li>
              <li>
                <a onClick={() => navigate(`/about`)}>Dropdown 2</a>
              </li>
              <li>
                <a onClick={() => navigate(`/about`)}>Dropdown 2</a>
              </li>
              <li>
                <a onClick={() => navigate(`/about`)}>Dropdown 3</a>
              </li>
              <li>
                <a onClick={() => navigate(`/about`)}>Dropdown 4</a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default AuthNavBar;
