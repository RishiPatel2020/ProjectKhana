import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import LogInPopUP from "../LogInPopUp/LogInPopUp";

import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import MealData from "../../../Service/MealData";
import userSession from "../../../Service/userSession";
import PopUp from "../../../SharedComponents/PopUp/PopUp";
const ShoppingCart = ({
  cart,
  setCart,
  cartPrice,
  setCartPrice,
  mealNumbers,
  setMealNumbers,
  setLogIn,
  numMeals,
  numMealsSelected,
  setNumMealsSelected,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    let total = 0;
    cart.map((item) => {
      total += MealData.getMeals()[item.id].price * mealNumbers[item.id];
    });
    setCartPrice(
      (cartPrice) => Math.round((total + Number.EPSILON) * 100) / 100
    );
    setShow(true);
  };
  const navigate = useNavigate();

  const clearCart = () => {
    setCart([]);
    const emptyAr = new Array(mealNumbers.length).fill(0);
    setMealNumbers(emptyAr);
  };
  const add = (id) => {
    setNumMealsSelected((numMealsSelected) => numMealsSelected + 1);
    setCartPrice(
      (cartPrice) =>
        Math.round(
          (cartPrice + MealData.getMeals()[id].price + Number.EPSILON) * 100
        ) / 100
    );
    mealNumbers[id]++;

    const tempAr = [];

    mealNumbers.map((item) => {
      tempAr.push(item);
    });

    setMealNumbers(tempAr);
  };
  const remove = (id) => {
    if (mealNumbers[id] > 0) {
      setNumMealsSelected((numMealsSelected) => numMealsSelected - 1);
      setCartPrice(
        (cartPrice) =>
          Math.round(
            (cartPrice - MealData.getMeals()[id].price + Number.EPSILON) * 100
          ) / 100
      );
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

  // log in warnin
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [displayEnoughPopUp, setDisplayEnoughPopUp] = useState(false);
  const [titleEnough, setTitleEnough] = useState("");
  const [bodyEnough, setBodyEnough] = useState("");

  {
    /* remove this after stripe */
  }
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [successTitle, setSuccessTitle] = useState("");
  const [successBody, setSuccessBody] = useState("");

  const handleCheckOut = () => {
    // not enough meals selected
    if (!userSession.isLoggedIn()) {
      setTitle("LogIn/SignUp");

      setBody(
        <div
          className="container align-items-center d-flex justify-content-center"
          style={{ fontFamily: "Signika" }}
        >
          <form style={{ padding: "20px" }} className="rounded">
            <Row className="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="mb-4">
                  <p className="lead">Log in or Sign Up to continue</p>
                </label>
              </div>
            </Row>

            <div className="container text-center mb-4">
              <LogInPopUP
                style={{ buttonColor: "secondary", textColor: "white" }}
                setLogIn={setLogIn}
              />
            </div>

            <div className="container text-center">
              {/* <Button variant="dark" className="">
                Log In
              </Button> */}
              <SignUpPopUp
                style={{ buttonColor: "secondary", textColor: "white" }}
                setLogIn={setLogIn}
              />
            </div>
          </form>
        </div>
      );
      setDisplayPopUp(true);
    } else if (parseInt(numMeals.split(" ")[0]) > numMealsSelected) {
      setTitleEnough("Not Enough Meals selected!!");
      setBodyEnough(<p>Select at least {numMeals.split(" ")[0]} meals</p>);
      setDisplayEnoughPopUp(true);
    } else {
      setSuccessTitle("GO TO STRIPE");
      setSuccessBody(<p>You can proceed to stripe checkout</p>);
      setSuccessPopUp(true);
    }
  };

  return (
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
          className="bi bi-cart3"
          style={{
            marginBottom: "12px",
            borderRadius: "10px",
            height: "36px",
          }}
        ></i>
      </button>
      {cart.length !== 0 ? (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ fontFamily: "Signika", height: "46%" }}
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
                    <Col style={{ marginLeft: "100px", marginTop: "10px" }}>
                      <span>{mealNumbers[item.id]} </span>
                      <span>{item.mealName}</span>
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
            <h3 className="text-center mt-5">{`${
              "Total Price $" + cartPrice
            }`}</h3>
            <div className="h-50 d-flex align-items-center justify-content-center">
              <button
                onClick={() => {
                  setCartPrice(0);
                  clearCart();
                  handleClose();
                }}
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

              {/* <Link to="/checkOut" style={{ marginLeft: "24px" }}> */}
              <button
                onClick={() => handleCheckOut()}
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
              {/* </Link> */}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ fontFamily: "Signika", height: "30%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex align-items-center justify-content-center">
              Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="text-center">Empty Cart Order Now</p>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <button
                onClick={() => {
                  handleClose();
                  navigate("/order");
                }}
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
                Order Now
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}

      
      {(numMealsSelected===0 || !userSession.isLoggedIn()) && (
        <PopUp
          displayPopUp={displayPopUp}
          setDisplayPopUp={setDisplayPopUp}
          title={title}
          body={body}
        />
      )}

      <PopUp
        displayPopUp={displayEnoughPopUp}
        setDisplayPopUp={setDisplayEnoughPopUp}
        title={titleEnough}
        body={bodyEnough}
      />

      {/* remove this after stripe */}
      <PopUp
        displayPopUp={successPopUp}
        setDisplayPopUp={setSuccessPopUp}
        title={successTitle}
        body={successBody}
      />
    </Nav>
  );
};

export default ShoppingCart;
