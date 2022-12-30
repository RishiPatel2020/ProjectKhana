import Nav from "react-bootstrap/Nav";

import { Container, Row, Col } from "react-bootstrap";
import './Nav.css'
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "bootstrap";
import { Offcanvas } from "react-bootstrap";

function NavBar({
  loggedIn,
  setLogIn,
  cart,
  setCart,
  mealNumbers,
  setMealNumbers,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    setLogIn(false);
    localStorage.removeItem("user");
  };

  const clearCart = () => {
    setCart([]);
    const emptyAr = new Array(mealNumbers.length).fill(0);
    setMealNumbers(emptyAr);
  };

  const add = (id) => {
    mealNumbers[id]++;

    const tempAr = [];

    mealNumbers.map((item) => {
      tempAr.push(item);
    });

    setMealNumbers(tempAr);
  };

  const remove = (id) => {
    if (mealNumbers[id] > 0) {
      mealNumbers[id]--;
      const tempAr = [];

      mealNumbers.map((item) => {
        tempAr.push(item);
      });

      setMealNumbers(tempAr);

      if (mealNumbers[id] === 0) {
        const tempCart = [];

        cart.forEach((element) => {
          if (element.id !== id) {
            tempCart.push(element);
          }
        });

        setCart(tempCart);
      }
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
      <Container style={{ fontFamily: "Signika"}}>
        {/* Mirchi Meals  */}
        <Navbar.Brand>
          <Link to="/">
            
            <img
              src={require("../../Resources/Logo/mirchiMealsLogo.png")}
              alt="MirchiMealsLogo"
              className="logoAdjustment"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* About, Order, Help Links */}
          <Nav className="me-auto" defaultActiveKey="/home">
            <Nav.Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", marginRight: "30px" }}
              >
                <strong
                  style={{ fontSize: "27px", color: "rgb(247, 193, 68)" }}
                >
                  About
                </strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/order"
                style={{ textDecoration: "none", marginRight: "30px" }}
              >
                <strong
                  style={{ fontSize: "27px", color: "rgb(247, 193, 68)" }}
                >
                  Order
                </strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/help"
                style={{ textDecoration: "none", marginRight: "90px" }}
              >
                <strong
                  style={{ fontSize: "27px", color: "rgb(247, 193, 68)" }}
                >
                  Help
                </strong>
              </Link>
            </Nav.Link>
          </Nav>

          {/* User profile  */}
          {loggedIn && (
            <Nav style={{ marginRight: "20px", marginTop: "8px" }}>
              <Navbar.Text
                style={{ color: "rgba(255,255,255,.55)", marginRight: "15px" }}
              >
                <strong
                  style={{
                    fontFamily: "Signika",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  {JSON.parse(localStorage.getItem("user")).user}
                </strong>
              </Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <span class="material-symbols-outlined"> Person</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">View Plans</Dropdown.Item>
                  <Dropdown.Item href="">Account Info</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          )}

          {/* Shopping cart */}
          {cart.length !== 0 && (
            <Nav style={{ marginTop: "8px" }}>
              <button
                className="bg-light text-dark"
                style={{
                  border: "0px",
                  height: "45px",
                  width: "63.67px",
                  padding: "6px 12px",
                  borderRadius: "10px",
                }}
                onClick={handleShow}
              >
                <span
                  style={{ paddingTop: "4px" }}
                  class="material-symbols-outlined"
                >
                  shopping_cart
                </span>
              </button>

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                style={{ fontFamily: "Signika", height: "85%" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="h-100 d-flex align-items-center justify-content-center">
                    Shopping Cart
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Container>
                    {cart.map((item) => {
                      return (
                        <Row key={item.id}>
                          <Col style={{ marginLeft: "100px" }}>
                            <span>{mealNumbers[item.id]} </span>
                            <span>{item.mealName}</span>
                            <br></br>
                            <span>{item.description}</span>
                            <br></br>
                            <button
                              variant="light"
                              onClick={() => remove(item.id)}
                              style={{
                                borderRadius: "30px",
                                border: "0px",
                                backgroundColor: "rgb(247, 193, 68)",
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ padding: "4px" }}
                              >
                                remove
                              </span>
                            </button>

                            <span
                              style={{
                                fontSize: "40px",
                                paddingLeft: "20px",
                                paddingRight: "15px",
                              }}
                            >
                              {mealNumbers[item.id]}
                            </span>

                            <button
                              variant="light"
                              onClick={() => add(item.id)}
                              style={{
                                borderRadius: "30px",
                                border: "0px",
                                backgroundColor: "rgb(247, 193, 68)",
                              }}
                            >
                              <span
                                className="material-symbols-outlined"
                                style={{ padding: "4px" }}
                              >
                                add
                              </span>
                            </button>
                          </Col>
                        </Row>
                      );
                    })}
                  </Container>

                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <button
                      onClick={() => clearCart()}
                      className="text-dark"
                      style={{
                        backgroundColor: "rgb(247, 193, 68)",
                        border: "0px",
                        height: "45px",
                        width: "145px",
                        borderRadius: "25px",
                        fontSize: "20px",
                      }}
                    >
                      Clear Order
                    </button>

                    <Link to="/checkOut" smooth style={{ marginLeft: "24px" }}>
                      <button
                        onClick={() => clearCart()}
                        className="text-dark"
                        style={{
                          backgroundColor: "rgb(247, 193, 68)",
                          border: "0px",
                          height: "45px",
                          width: "145px",
                          borderRadius: "25px",
                          fontSize: "20px",
                        }}
                      >
                        Check Out
                      </button>
                    </Link>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
