import Nav from "react-bootstrap/Nav";
import AccountInfo from "../AccountInfo/AccountInfo";
import userSession from "../../Service/userSession";
import Container from "react-bootstrap/Container";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import UserProfile from "./UserProfile/UserProfile";

function NavBar({
  loggedIn,
  setLogIn,
  cart,
  setCart,
  mealNumbers,
  setMealNumbers,
  cartPrice,
  setCartPrice,
}) {
  const [displayAccountInfo, setDisplayAccountInfo] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="secondary"
      variant="light"
      className="fixed-top"
    >
      <Container style={{ fontFamily: "Signika" }}>
        {/* Mirchi Meals  */}
        <Navbar.Brand>
          <Nav.Link href="#/">
            <img
              src={require("../../Resources/Logo/mirchiMealsLogo.png")}
              alt="MirchiMealsLogo"
              className="logoAdjustment"
            />
          </Nav.Link>
        </Navbar.Brand>

        {/* user Profile */}
        <UserProfile
          setDisplayAccountInfo={setDisplayAccountInfo}
          setLogIn={setLogIn}
        />

        {/* Shopping cart */}
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
          mealNumbers={mealNumbers}
          setMealNumbers={setMealNumbers}
        />

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            backgroundColor: "rgb(247, 193, 68)",
            boxShadow: "2px 1px 3px black",
            height: "36px",
            width: "48px",
            fontSize: "10px",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* About, Order, Help Links */}
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link href="#/about">
              {/* adjust marginRight Based on screens */}
              <span
                className="fontAdjustment"
                style={{ marginLeft: "0px", marginRight: "40px" }}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link href="#/order">
              <span className="fontAdjustment" style={{ marginRight: "40px" }}>
                Order
              </span>
            </Nav.Link>
            <Nav.Link href="#/help">
              <span className="fontAdjustment" style={{ marginRight: "40px" }}>
                Help
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {userSession.isLoggedIn() ? (
        <AccountInfo
          show={displayAccountInfo}
          setShow={setDisplayAccountInfo}
        />
      ) : null}
    </Navbar>
  );
}
export default NavBar;
