import Modal from "bootstrap";
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

function NavBar({
  loggedIn,
  setLogIn,
  cart,
  setCart,
  mealNumbers,
  setMealNumbers,
}) {
  const [displayAccountInfo, setDisplayAccountInfo] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    setLogIn(false);
    userSession.removeUser();
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
          <Link to="/">
            <img
              src={require("../../Resources/Logo/mirchiMealsLogo.png")}
              // src={require("../../../public/Resources/Logo/mirchiMealsLogo.png")}
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
                <strong className="fontAdjustment">About</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/order"
                style={{ textDecoration: "none", marginRight: "30px" }}
              >
                <strong className="fontAdjustment">Order</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/help"
                style={{ textDecoration: "none", marginRight: "90px" }}
              >
                <strong className="fontAdjustment">Help</strong>
              </Link>
            </Nav.Link>
          </Nav>

          {/* User profile  */}
          {userSession.isLoggedIn() && (
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
                  {userSession.getUser().info}
                </strong>
              </Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {/* <span class="material-symbols-outlined"> Person</span> */}
                  <i class="bi bi-person"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/orderHistory">Order History</Dropdown.Item>
                  <Dropdown.Item
                    onClick= {() => setDisplayAccountInfo(true)}
                  >
                    Account Info
                    {/* <Link
                      to="/accountInfo"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Account Info
                    </Link> */}
                  </Dropdown.Item>
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
                  height: "34px",
                  width: "56.67px",
                  padding: "inherit",
                  borderRadius: "10px",
                }}
                onClick={handleShow}
              >
                <i class="bi bi-cart3" style={{ fontSize: "20px" }}></i>
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
      {userSession.isLoggedIn()?<AccountInfo show={displayAccountInfo} setShow = {setDisplayAccountInfo} />:null}
    </Navbar>
  );
}
export default NavBar;
