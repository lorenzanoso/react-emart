import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faShoppingCart,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import * as actionUser from "../redux/actions/actionUser";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-spinkit";
import { useCollection } from "react-firebase-hooks/firestore";

function NavigationBar() {
  const activeUser = useSelector((state) => state.activeUser);
  const [loading, setLoading] = useState(false);
  const { logoutUser } = bindActionCreators(actionUser, useDispatch());
  const navigate = useNavigate();
  const [cartProducts] = useCollection(
    activeUser?.id &&
      db.collection("users").doc(activeUser.id).collection("cart")
  );

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      logoutUser();
      navigate("/login");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="m-5">
        <Spinner name="ball-spin-fade-loader" color="blue" fadeIn="none" />
      </div>
    );
  }

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
          {activeUser.email ? (
            <>
              <NavLink
                to="/cart"
                className="btn position-relative mini-icon-button me-3"
                type="button"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
                  {cartProducts ? cartProducts?.docs.length : 0}
                </span>
              </NavLink>
              <NavLink
                to="/login"
                className="btn position-relative mini-icon-button"
                type="button"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <span> LOGOUT</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn position-relative mini-icon-button me-3"
                type="button"
              >
                <FontAwesomeIcon icon={faSignIn} />
                <span>LOGIN</span>
              </NavLink>
              <NavLink
                to="/signup "
                className="btn position-relative mini-icon-button"
                type="button"
              >
                <FontAwesomeIcon icon={faEdit} />
                <span> REGISTER</span>
              </NavLink>
            </>
          )}
        </div>
        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link text-dark text-uppercase">
                HOME
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/products"
                className="nav-link text-dark text-uppercase"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/about-us"
                className="nav-link text-dark text-uppercase"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item p-2">
              <NavLink
                to="/contact-us"
                className="nav-link text-dark text-uppercase"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
