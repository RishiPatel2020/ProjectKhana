import Row from "react-bootstrap/Row";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import "./checkOut.css";
import { Button } from "react-bootstrap";
import userSession from "../../Service/userSession";
import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpPopUp from "../NavBar/SignUpPopUp/SignUpPopUp";
import LogInPopUP from "../NavBar/LogInPopUp/LogInPopUp";
import MealData from "../../Service/MealData";
const CheckOut = ({ setLogIn, mealNumbers, cart, setCart, totalPrice }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/pickMeals");
  };
  const checkOutContent = () => {
    return (
      <section
        className="vh-100"
        style={{ backgroundColor: "white", fontFamily: "Signika" }}
      >
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <p className="text-center">
                <span className="h2">Check Out</span>
              </p>

              <MDBCard className="mb-4">
                <MDBCardBody className="p-4 mt-0">
                  {/* replicate row */}

                  {cart.map((item) => {
                    return (
                      <>
                        <MDBRow className="align-items-center" key={item.id}>
                          <MDBCol
                            md="2"
                            className="d-flex justify-content-center"
                          >
                            <div>
                              <p className="small text-muted mb-0 pb-1 text-center">
                                Name
                              </p>
                              <p className="lead fw-normal mb-0 text-center">
                                {item.mealName}
                              </p>
                            </div>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="d-flex justify-content-center"
                          >
                            <div>
                              <p className="small text-muted pb-1 text-center">
                                Quantity
                              </p>
                              <p className="lead fw-normal text-center">
                                {mealNumbers[item.id]}
                              </p>
                            </div>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="d-flex justify-content-center"
                          >
                            <div>
                              <p className="small text-muted pb-1 text-center">
                                Price
                              </p>
                              <p className="lead fw-normal text-center">
                                ${MealData.getMeals()[item.id].price}
                              </p>
                            </div>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="d-flex justify-content-center"
                          >
                            <div>
                              <p className="small text-muted mb-0 pb-2 text-center">
                                Total
                              </p>
                              <p className="lead fw-normal mb-0">
                                $
                                {mealNumbers[item.id] *
                                  MealData.getMeals()[item.id].price}
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </>
                    );
                  })}
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-5">
                <MDBCardBody className="p-4 mt-0">
                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>
                      <span className="lead fw-normal">${totalPrice}</span>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <div className="d-flex justify-content-end">
                <MDBBtn
                  color="light"
                  size="lg"
                  className="me-2"
                  onClick={() => handleBack()}
                >
                  &lt; Back
                </MDBBtn>
                <MDBBtn size="lg" color="dark">
                  Proceed
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  };

  const logInFirst = () => {
    return (
      <div
        className="container min-vh-100 align-items-center d-flex justify-content-center"
        style={{ fontFamily: "Signika" }}
      >
        <form
          style={{ backgroundColor: "rgb(247, 193, 68)", padding: "20px" }}
          className="rounded"
        >
          <Row className="mb-4">
            <div className="form-group">
              <label for="exampleInputEmail1" className="mb-2">
                <p className="lead">Log in to continue</p>
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
  };
  return <>{userSession.isLoggedIn() ? checkOutContent() : logInFirst()}</>;
};

export default CheckOut;
