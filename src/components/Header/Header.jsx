import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/header.css";

const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show-menu");
  return (
    <header className="header">
      <Container>
        <div className="nav-wrapper d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizza Hatt</h5>
          </div>
          {/* =========Menu========= */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5 ">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active-menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* =========Nav right icons========= */}
          <div className="nav-right d-flex align-items-center gap-3">
            <span className="cart-icon">
              {" "}
              <i className="ri-shopping-bag-line"></i>
              <small className="cart-badge">2</small>
            </span>

            <span className="user">
              <Link to="login">
                <i className="ri-user-line"></i>{" "}
              </Link>
            </span>

            <span className="mobile-menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>{" "}
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
