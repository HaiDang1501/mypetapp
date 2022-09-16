import React from "react";
import "../../sass/Layout/Header.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar__container">
        <ul className="navbar__ul">
          <li className="navbar__item">
            <Link to={"#"} className="navbar__link">
              HOME
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={"#"} className="navbar__link">
              PETMART
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={"#"} className="navbar__link">
              SERVICE
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={"#"} className="navbar__link">
              TRAINING
            </Link>
          </li>
          <li className="navbar__item">
            <Link to={"#"} className="navbar__link">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
      <Button type="primary" className="button--css">
        login
      </Button>
    </nav>
  );
};

export default Navbar;
