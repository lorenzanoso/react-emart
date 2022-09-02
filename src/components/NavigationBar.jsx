import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className=" bg-white fixed-top py-4">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img
            src="https://i.pinimg.com/736x/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg"
            alt="Site icon"
          />
          <span className="text-dark" id="brand-name">
            ULTRA
          </span>
        </NavLink>
        <div className="nav-btns order-lg-2">
          <button
            className="btn position-relative mini-icon-button"
            type="button"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              5
            </span>
          </button>
          <button
            className="btn position-relative mini-icon-button"
            type="button"
          >
            <FontAwesomeIcon icon={faHeart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              2
            </span>
          </button>
          <button className="btn mini-icon-button" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item p-2">
              <a href="#home" className="nav-link text-dark text-uppercase">
                Home
              </a>
            </li>
            <li className="nav-item p-2 ">
              <a
                href="#collection"
                className="nav-link text-dark text-uppercase"
              >
                Collection
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="#specials" className="nav-link text-dark text-uppercase">
                Specials
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="#blogs" className="nav-link text-dark text-uppercase">
                Blogs
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="#about" className="nav-link text-dark text-uppercase">
                About Us
              </a>
            </li>
            <li className="nav-item p-2">
              <a href="#popular" className="nav-link text-dark text-uppercase">
                Popular
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
