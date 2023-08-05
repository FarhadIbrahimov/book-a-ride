import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../Authorize/AuthContext";
import "./Nav.css";

function AppNavBar({ userId }) {
  // Receive userId as a prop
  const { state, dispatch } = useAuthContext();
  const navigate = useNavigate();
  console.log(userId);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <li>
            <a onClick={() => navigate(`/home/${userId}`)}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate(`/profile/${userId}`)}>Profile</a>
          </li>
          <li className="services">
            <a>Activity</a>
            <ul className="dropdown">
              <li>
                <a onClick={() => navigate(`/book/${userId}`)}>Book Page </a>
              </li>
              <li>
                <a onClick={() => navigate(`/activity/${userId}`)}>
                  Dropdown 2
                </a>
              </li>
              <li>
                <a onClick={() => navigate(`/activity/${userId}`)}>
                  Dropdown 2
                </a>
              </li>
              <li>
                <a onClick={() => navigate(`/activity/${userId}`)}>
                  Dropdown 3
                </a>
              </li>
              <li>
                <a onClick={() => navigate(`/activity/${userId}`)}>
                  Dropdown 4
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              onClick={() => {
                dispatch({ type: "LOGOUT", payload: state });
                // console.log(dispatch({ type: 'LOGOUT', payload: state }))
                navigate(`/loading`);
              }}
            >
              Sign Out
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default AppNavBar;
