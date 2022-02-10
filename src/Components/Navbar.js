import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="px-2 py-3 bg-green-300 mb-3">
        <div className="container m-auto px-4 flex ">
          <div className="w-full relative flex">
            <a className="text-2xl font-bold">NetLuIme</a>
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/">
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <span className="ml-2">Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
