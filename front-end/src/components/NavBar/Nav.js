import Modal from "bootstrap";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import AccountInfo from "../AccountInfo/AccountInfo";
import userSession from "../../Service/userSession";
import { Container, Row, Col } from "react-bootstrap";
import "./Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "bootstrap";
import { Offcanvas } from "react-bootstrap";
import LogInPopUP from "./LogInPopUp/LogInPopUp";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";
import MealData from "../../Service/MealData";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

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
  const logOut = () => {
    setLogIn(false);
    userSession.removeUser();
  };

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
        {/* User profile  */}
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-basic"
            className="mx-1"
            style={{
              marginBottom: "-3px",
              borderRadius: "10px",
              height: "36px",
              boxShadow: "2px 1px 3px black",
            }}
          >
            <i
              class="bi bi-person"
              style={{
                marginBottom: "2px",
                borderRadius: "10px",
                height: "36px",
              }}
            ></i>
          </Dropdown.Toggle>

          {/* user info */}
          {userSession.isLoggedIn() ? (
            <Dropdown.Menu>
              <Dropdown.Item href="#/orderHistory">Order History</Dropdown.Item>
              <Dropdown.Item onClick={() => setDisplayAccountInfo(true)}>
                Account Info
              </Dropdown.Item>
              <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          ) : (
            <Dropdown.Menu>
              <Dropdown.Item>
                <SignUpPopUp
                  style={{ buttonColor: "secondary", textColor: "white" }}
                  setLogIn={setLogIn}
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <LogInPopUP
                  style={{ buttonColor: "secondary", textColor: "white" }}
                  setLogIn={setLogIn}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Dropdown>

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
