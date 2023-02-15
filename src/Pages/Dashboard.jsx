import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {


  return (
    <div className="Dashboard">
      <header>
        <Link className="link" to={"/"}>
          <p>
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </p>
        </Link>

        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Developers
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Posts
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fa-solid fa-user"></i>Dashboard
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                <i className="fa-solid fa-right-from-bracket"></i>Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <h1>Dashboard</h1>
        <h2>
          <i className="fa-solid fa-user"></i>
          Welcome 
        </h2>
        <p>You have not yet setup a profile, please add some info</p>
        <Link className="link" to={"/create-profile"}>
          Create profile
        </Link>

        <div className="menu">
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
