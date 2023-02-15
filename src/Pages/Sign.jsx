import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sign = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    if (values.password !== values.confirmedPassword)
      return toast("You have entered two different passwords", {
        type: "error",
      });

    try {
      let {
        data: { token, message },
      } = await axios.post("/users", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;

      toast(message, { type: "success" });

      console.log(message);
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
    <div className="Sign">
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

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            required
            value={values.name}
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Email Address"
            required
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <p className="Gravatar">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>
          <input
            type="password"
            placeholder="Password"
            required
            value={values.password}
            onChange={handleInputChange}
            name="password"
            minLength={6}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={values.confirmedPassword}
            onChange={handleInputChange}
            name="confirmedPassword"
            minLength={6}
          />
          <button className="btn-primary">
            <Link to={"/dashboard"} className="Link">
              Register
            </Link>
          </button>
          <p>
            Already have an account?{" "}
            <Link className="sign-btn" to={"/login"}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Sign;
