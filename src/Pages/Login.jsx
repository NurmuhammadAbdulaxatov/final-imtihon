import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      let {
        data: { token, message },
      } = await axios.get("/users", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;

      toast(message, { type: "success" });

      navigate("/dashboard");
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="Login">
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

      <div className="container">
        <h1>Sign In</h1>
        <h2>
          <i className="fa-solid fa-user"></i>
          Sign Into Your Account
        </h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Email Address"
            required
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <button className="btn-primary">
            <Link to={"/dashboard"} className="Link">
              Login
            </Link>
          </button>
          <p>
            Don't have an account?
            <Link className="sign-btn" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
