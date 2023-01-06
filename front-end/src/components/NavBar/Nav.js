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
import LogInPopUP from "./LogInPopUp/LogInPopUp";
import SignUpPopUp from "./SignUpPopUp/SignUpPopUp";

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
              <Dropdown.Item><SignUpPopUp
                    style={{ buttonColor: "secondary", textColor: "white" }}
                    setLogIn={setLogIn}
                  /></Dropdown.Item>
              <Dropdown.Item><LogInPopUP
                    style={{ buttonColor: "secondary", textColor: "white"}}
                    setLogIn={setLogIn}
                  /></Dropdown.Item>
            </Dropdown.Menu>
          )}
        </Dropdown>
        {/* {userSession.isLoggedIn() && (
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
              
            
            <Dropdown.Menu>
              <Dropdown.Item href="#/orderHistory">Order History</Dropdown.Item>
              <Dropdown.Item onClick={() => setDisplayAccountInfo(true)}>
                Account Info
              </Dropdown.Item>
              <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )} */}

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
                marginRight: "17px",
                marginBottom: "5px",
                boxShadow: "2px 1px 3px black",
              }}
              onClick={handleShow}
            >
              <i
                class="bi bi-cart3"
                style={{
                  marginBottom: "12px",
                  borderRadius: "10px",
                  height: "36px",
                }}
              ></i>
            </button>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              style={{ fontFamily: "Signika", height: "50%" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="d-flex align-items-center justify-content-center">
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
                          {/* <span>{item.description}</span> */}
                          {/* {Object.keys(item.description).map((key) => {
                              return (
                                <span>
                                  {`${key} : ${item.description[key]}`}
                                  <br></br>
                                </span>
                              );
                            })} */}
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
                              style={{ padding: "0px" }}
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
