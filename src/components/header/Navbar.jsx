import React from "react";
import Logo from "../../assets/tamslogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div id="Logo">
          <img src={Logo} alt="logo" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item" id="navList">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Home
              </a>
            </li>
            <li class="nav-item" id="navList">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                About
              </a>
            </li>
            <li class="nav-item" id="navList">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Fashion
              </a>
            </li>
            <li class="nav-item" id="navList">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Contact
              </a>
            </li>
          </ul>
          <div id="navBtn">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
