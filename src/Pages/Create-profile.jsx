import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  function handleOpen() {
    setOpen(open === true ? false : true);
  }

  function handleSelect() {
    import("../data/select.json").then((module) => {
      setData(module.default);
    });
  }

  return (
    <div className="create-profile">
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
        <h1>Create Your Profile</h1>
        <h2>Let's get some information to make your</h2>
        <p>* = required field</p>
        <form>
          <select onClick={handleSelect} name="name" id="name">
            {data.map((p, index) => (
              <option key={index}>{p.name}</option>
            ))}
          </select>
          <p className="p0">
            Give us an idea of where you are at in your career
          </p>
          <input type="text" placeholder="Company" />
          <p className="p1">Could be your own company or one you work of</p>
          <input type="text" placeholder="Website" />
          <p className="p2">Could be your own or a company website</p>
          <input type="text" placeholder="Location" />
          <p className="p3">City & state suggested (eg. Boston, MA)</p>
          <input type="text" placeholder="* Skills" required />
          <p className="p4">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </p>
          <input type="text" placeholder="Github Username" />
          <p className="p5">
            If you want your latest repos and a Github link, include your
            username
          </p>
          <textarea
            name="name"
            id="name"
            cols="30"
            rows="2"
            placeholder="A short bio of yourself"
          ></textarea>
          <p className="p6">Tell us a little about yourself</p>
          <button className="button" onClick={handleOpen}>Add Social Network Links</button>
          <p className="p-optional">Optional</p>
          {open ? (
            <div className="optional">
              <div className="form">
                <div className="twitter">
                  <i className="fa-brands fa-twitter"></i>
                  <input type="text" name="name" placeholder="Twitter URL" />
                </div>
                <div className="facebook">
                  <i className="fa-brands fa-square-facebook"></i>
                  <input type="text" name="name" placeholder="Facebook URL" />
                </div>
                <div className="youtube">
                  <i className="fa-brands fa-youtube"></i>
                  <input type="text" name="name" placeholder="Youtube URL" />
                </div>
                <div className="linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                  <input type="text" name="name" placeholder="Linkedin URL" />
                </div>
                <div className="instagram">
                  <i className="fa-brands fa-instagram"></i>
                  <input type="text" name="name" placeholder="Instagram URL" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <br />
          <button>
            <Link className="cp-send" to={"/dashboard"}>
              Send
            </Link>
          </button>
          <button>
            <Link className="cp-back" to={"/dashboard"}>
              Go Back
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
