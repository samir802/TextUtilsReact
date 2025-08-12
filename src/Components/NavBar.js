import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className={`nav-link text-${props.mode === "dark" ? "light" : "dark"}`} to="/"> Home</Link> */}
                <a className={`nav-link text-${props.mode === "dark" ? "light" : "dark"}`} href="#"> Home</a>
              </li>
            </ul>

            
            {/* // Color Mode Toggle
            <div className="d-flex">
              <div className=" bg-dark" style={{height:"20px",width:"20px"}} onClick={()=>{props.toggleMode('primary')}}></div>
            </div> */}

            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.togglemode}
              />
              <label
                className={`form-check- text-${props.mode === "dark" ? "light" : "dark"
                  }`}
                htmlFor="flexSwitchCheckChecked"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: "Set Title Here",
};
