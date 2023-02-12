import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bcg-color">
      <div className="Home">
        <header>
          <p>
            <i className="fa-solid fa-code"></i>
            DevConnector
          </p>

          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Developers
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Register
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
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
            <Link className="btn-white" to={"/"}>
              Login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
