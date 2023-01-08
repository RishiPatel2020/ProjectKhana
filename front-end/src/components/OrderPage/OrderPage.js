/**
 * Might need API call to validate zipcode based on region
 */
import DeliveryDate from './DeliveryDate/DeliveryDate'; 
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import ZipCode from "./ZipCode/ZipCode";
import { useState, useRef } from "react";
import InformationGrid from "../About/InformationGrid/InformationGrid";
import Scroll from "../../Service/ScrollTop";
import { Modal } from "react-bootstrap";

const data = {
  backColor: "primary",
  headingColor: "dark",
  titleColor: "secondary",
  textColor: "dark",
  heading: "",
  image1: require("../../Resources/Vector/fresh.png"),
  image1Height: "150px",
  image1Width: "250px",
  title1: "Fresh",
  description1: "Meals cooked by our partner kitchens when ordered",

  image2: require("../../Resources/Vector/tasty.png"),
  image2Width: "250px",
  image2Height: "150px",
  title2: "Tasty",
  description2: "Authentically sourced and spiced, for the right taste",

  image3: require("../../Resources/Vector/convinient.png"),
  image3Width: "250px",
  image3Height: "150px",
  title3: "Convinient",
  description3: "Contact-less delivery right to your doorstep, just in-time",
};

const OrderPage = ({
  numMeals,
  setNumMeals,
  zipCode,
  setZipCode,
  freq,
  setFreq,
  delivDate,
  setDelivDate,
  resetOrderPageInfo,
  setResetOrderPageInfo,
  setMealNumbers,
}) => {
  const navigate = useNavigate();

  // For pop up if something is missing
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  /**
   * coming from pickMeals, want to reselect all options
   * coming from MealPlans section of home page, want to enter everything EXCEPT plan size because we clicked on one of the buttons like 4 meals, 6 meals, ...
   * coming from else where, go to pickMeals page or stay on orderPage depending on previous interaction of user with orderPage
   */
  useEffect(() => {
    if (resetOrderPageInfo === 0) {
      // user was looking at pickMeals; went else where; wants to go back to pickMeals
      // GO to pick meals
      navigate("/pickMeals");
    } else if (resetOrderPageInfo === 1) {
      // came from mealPlans section of Home Page
      // reset freq, date, and zipcode

      // setFreq("Select Frequency");

      setZipCode("");
      setDelivDate("Select Date");
    } else {
      // Want to choose every option again; Coming back from Pick Meals Page
      setNumMeals("Select Plan");
      setZipCode("");
      // setFreq("Select Frequency");
      setDelivDate("Select Date");
    }
    Scroll.scrollUp();
  }, []);

  // Pick meals button clicked
  const handlePickMeals = () => {
    // NEED PROPER ZIPCODE, AND ZIPCODE SHOULD BE in specific range
    if (zipCode.length === 0) {
      // might require API call
      handleDisplay("Enter Proper Zip Code");
    } else if (numMeals === "Select Plan") {
      handleDisplay("Select Plan");
    }
    // else if (freq === "Select Frequency") {
    // handleDisplay("Select Frequency");
    // }
    else if (delivDate === "Select Date") {
      handleDisplay("Select Date");
    } else {
      // move to pickMeals page
      setResetOrderPageInfo(0);
      setMealNumbers([]);
      navigate("/pickMeals");
    }
  };

  // open pop up
  const handleDisplay = (msg) => {
    setMsg(msg);
    setShow(true);
  };

  // closes pop up
  const handleClose = () => {
    setMsg("");
    setShow(false);
  };


  // to see if delivDate rendered is the whole re-rendered
  console.log("OrderPage RENDERED !!!!!");

  return (
    <>
      {/* User Input for zipcode, freq, plan, date */}
      <section
        className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
        id="Showcase"
        style={{ fontFamily: "Signika", marginBottom: "0px" }}
      >
        <div className="container" style={{ paddingBottom: "10px" }}>
          <div className="d-sm-flex align-items-center my-2">
            {/* Image on left; disappears in small devices */}
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={require("../../Resources/Meals/pavbhaji.png")}
              alt="lorem"
              style={{
                padding: "10px",
                height: "450px",
                width: "450px%",
                borderRadius: "17px",
                marginBottom: "6px",
                marginRight: "60px",
              }}
            />

            {/* User Input Stuff on Right*/}
            <Container>
              <Row>
                <h1 className="text-center">Enter Zip Code</h1>
              </Row>

              {/* Zip Code Element */}
              <Row>
                <ZipCode zipCode={zipCode} setZipCode={setZipCode} />
              </Row>

              <Row>
                {/* Plan Size */}
                <Col style={{ marginBottom: "35px" }}>
                  <h2 className="text-center">Plan Size</h2>
                  <h6 className="text-center">Each meal is made for 1 adult</h6>

                  <div className="d-flex align-items-center justify-content-center">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="dark"
                        id="dropdown-basic"
                        style={{ height: "50px", width: "150px" }}
                      >
                        <span className="text-primary">{numMeals}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onMouseEnter={() => setNumMeals("4 Meals")}
                          onClick={() => setNumMeals("4 Meals")}
                        >
                          <span>4 meals</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setNumMeals("6 Meals")}
                          onClick={() => setNumMeals("6 Meals")}
                        >
                          <span>6 meals</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setNumMeals("8 Meals")}
                          onClick={() => setNumMeals("8 Meals")}
                        >
                          <span>8 meals</span>
                        </Dropdown.Item>

                        <Dropdown.Item
                          onMouseEnter={() => setNumMeals("12 Meals")}
                          onClick={() => setNumMeals("12 Meals")}
                        >
                          <span>12 meals</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>

                {/* Freq */}
                {/* <Col style={{ marginBottom: "35px" }}>
                  <h2 className="text-center">Frequency</h2>
                  <h6 className="text-center">Order one-time or recurring </h6>

                  <div className="d-flex align-items-center justify-content-center">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="dark"
                        id="dropdown-basic"
                        style={{ height: "50px", width: "150px" }}
                      >
                        <span className="text-primary">{freq}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onMouseEnter={() => setFreq("Weekly")}
                          onClick={() => setFreq("Weekly")}
                        >
                          <span>Weekly</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setFreq("Bi-Weekly")}
                          onClick={() => setFreq("Bi-Weekly")}
                        >
                          <span>Bi-Weekly</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setFreq("One Time")}
                          onClick={() => setFreq("One Time")}
                        >
                          <span>One Time</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col> */}

                {/* Delivery Date */}
                <Col style={{ marginBottom: "55px" }}>
                  <h2 className="text-center">Delivery</h2>
                  <h6 className="text-center">
                    Deliveries between 6pm - 7:30pm
                  </h6>
                  <div className="d-flex align-items-center justify-content-center">
                    {/* <Dropdown>
                      <Dropdown.Toggle
                        variant="dark"
                        id="dropdown-basic"
                        style={{ height: "50px", width: "150px" }}
                      >
                        <span className="text-primary">{delivDate}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onMouseEnter={() => setDelivDate("Monday")}
                          onClick={() => setDelivDate("Monday")}
                        >
                          <span>Monday</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setDelivDate("Wednesday")}
                          onClick={() => setDelivDate("Wednesday")}
                        >
                          <span>Wednesday</span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          onMouseEnter={() => setDelivDate("Friday")}
                          onClick={() => setDelivDate("Friday")}
                        >
                          <span>Friday</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}

                    <DeliveryDate
                      delivDate={delivDate}
                      setDelivDate={setDelivDate}
                    />
                  </div>
                </Col>
              </Row>

              {/* Pick Meals Button */}
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="secondary"
                  className="text-primary"
                  style={{
                    height: "50px",
                    width: "150px",
                    borderRadius: "25px",
                    fontSize: "25px",
                  }}
                  onClick={handlePickMeals}
                >
                  Pick Meals
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Tasty, Fresh, Convinient section */}
      <InformationGrid data={data} />

      {/* Pop up if zipcode, freq, plan, or date missing */}
      <Modal show={show} onHide={handleClose} style={{ fontFamily: "Signika" }}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>Fill all Info Correctly to pick meals</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="lead text-center">{msg}</p>
        </Modal.Body>

        <Modal.Footer className="h-100 d-flex align-items-center justify-content-center">
          <Button variant="dark" onClick={handleClose}>
            <span className="text-primary">Close</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderPage;
