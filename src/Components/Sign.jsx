import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="Sign">
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

      <div className="container">
        <h1>Sign Up</h1>
        <h2>
          <i className="fa-solid fa-user"></i>
          Create Your Account
        </h2>

        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email Address" required />
          <p className="Gravatar">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="btn-primary">
            <Link className="Link" to={"/"}>
              Register
            </Link>
          </button>
          <p>
            Already have an account?{" "}
            <Link className="sign-btn" to={"/signin"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign;
