import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bcg-color">
      <div className="Home">
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
                <Link className="link" to="/signup">
                  Register
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section>
          <h1>Developer Connector</h1>
          <h2>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h2>
          <div>
            <Link className="btn-primary" to={"/signup"}>
              Sign Up
            </Link>
            <Link className="btn-white" to={"/login"}>
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
