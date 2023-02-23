import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  BUDDIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAVOURITE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  REQUESTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SUGGESTED
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
