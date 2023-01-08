/**
 *  For now can look in csv file for meal data based on zip code entered
 *  Scaling: might need API call to search meal info based on given zip code
 */

import "./PickMeals.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../../Service/ScrollTop";
import MealData from "../../Service/MealData";
const PickMeals = ({
  zipCode,
  cart,
  setCart,
  mealNumbers,
  setMealNumbers,
  setResetOrderPageInfo,
  totalPrice,
  setTotalPrice,
}) => {
  // so we can go back to orderPage
  const navigate = useNavigate();

  useEffect(() => {
    // if zipCode not provided, go back to order page
    if (zipCode.length === 0) {
      setResetOrderPageInfo(2); // if no zip code; go back to order page and have user fill out all the fields
      navigate("/order");
    } else {
      // scroll up only once when user arrives on this page
      ScrollTop.scrollUp();
      if (mealNumbers.length === 0) {
        setMealNumbers(new Array(data.length).fill(0));
        console.log("RESETTING CART");
      }
    }
  }, []);

  const data = MealData.getMeals();


  // pop up to show description/ingridents to users
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [mealSelected, setMealSelected] = useState("");

  // What if user wants to reset freq, zipcode, etc...?? => we let user go back to OrderPage
  const backToOrderPage = () => {
    setCart([]);
    setMealNumbers([]);
    setResetOrderPageInfo(2); // reset everything in orderPage
    navigate("/order");
  };

  // Handles PopUp display
  const handleDisplay = (description, mealName) => {
    setDescription(description);
    setMealSelected(mealName);
    setShow(true);
  };

  // closes description pop up when user closes it
  const handleClose = () => {
    setDescription("");
    setMealSelected("");
    setShow(false);
  };

  /**
   * @Goal ADD item to cart && increment quantity by 1
   * @param idNum of item to be added
   * 1. Increment quantity in mealNumbers at index "id"
   * 2. Update cart by setCart()
   */

  const add = (idNum) => {
    // will have to add PRICE
    const addToCart = {
      id: idNum,
      mealName: data[idNum].mealName,
      description: data[idNum].description,
    };

    const tempArray = [];

    if (cart.length === 0) {
      // cart is empty
      tempArray.push(addToCart);
      setCart(tempArray);
    } else {
      // cart is NOT empty; 2 cases: idNum IS in cart OR NOT in the cart

      // don't wanna add duplicate items
      let found = false;

      cart.forEach((element) => {
        if (element.id === idNum) {
          found = true;
        }
        tempArray.push(element);
      });

      // adding item first time
      if (!found) {
        tempArray.push(addToCart);
      }
      setCart(tempArray); // Update cart to display correct items in cart
    }

    mealNumbers[idNum]++; // increment quantity in mealNumbers at index "idNum"
    const newAr = [];
    mealNumbers.map((item) => {
      newAr.push(item);
    });
    setMealNumbers(newAr); // Update mealNumbers to display correct quantity numbers in cart AND pickMeals page
  };

  /**
   * @Goal REMOVE item from cart && decrement quantity by 1
   * @param id of item to be removed/reduced
   * 1. Decrement quantity in mealNumbers at index "idNum"
   * 2. Update cart by setCart()
   */
  const remove = (id) => {
    // CANNOT have quantity < 0
    if (mealNumbers[id] > 0) {
      mealNumbers[id]--; // decrement quantity in mealNumbers at index "id"
      const newAr = [];
      mealNumbers.map((item) => {
        newAr.push(item);
      });
      setMealNumbers(newAr); // update mealNumbers

      if (mealNumbers[id] === 0) {
        // if item is reduced to 0 in cart, cart should be updated so we don't have an item in cart whose quantity = 0
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
    <>
      <div className="justify-content-center backButtonContainer">
        <Button
          variant="secondary"
          className="position-fixed backButton"
          onClick={() => backToOrderPage()}
          style={{ fontFamily: "Signika", color: "white" }}
        >
          Back
        </Button>
      </div>
      <section style={{ fontFamily: "Signika" }}>
        <Container className="text-dark my-4 customCss">
          <Row style={{ marginTop: "66px", marginBottom: "32px" }} xs="auto">
            {data.map((item) => {
              const { id, img, mealName, description, price } = item;
              return (
                <Col key={id} className="p-3 spacesBetweenBoxes">
                  <div className="card-body text-center">
                    <img src={img} className="img-fluid imageAdjustment" />
                    <h4 className="titleAdjustment">{mealName}</h4>
                    <h5>${price}</h5>
                    <Link onClick={() => handleDisplay(description, mealName)}>
                      <p className="text-light descriptionAdjustment">
                        Description/Ingridients
                      </p>
                    </Link>

                    <Button
                      variant="light"
                      onClick={() => remove(id)}
                      className="buttonAdjustment"
                    >
                      <span className="letterAdjustment">-</span>
                    </Button>

                    <span className="amountAdjustment">{mealNumbers[id]}</span>

                    <Button
                      variant="light"
                      onClick={() => add(id)}
                      className="buttonAdjustment"
                    >
                      <span className="letterAdjustment">+</span>
                    </Button>
                  </div>
                </Col>
              );
            })}

            <Modal
              show={show}
              onHide={handleClose}
              style={{ fontFamily: "Signika" }}
            >
              <Modal.Header closeButton>
                <Modal.Title>{mealSelected}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {Object.keys(description).map((key) => {
                  return (
                    <span>
                      {`${key} : ${description[key]}`}
                      <br></br>
                    </span>
                  );
                })}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>

          <Row>
            {/* Only show checkout button if # of item > 0 */}
            {cart.length !== 0 && (
              <div className="h-100 d-flex align-items-center justify-content-center">
                <Link to="/checkOut" >
                  <Button
                    variant="secondary"
                    className="text-primary checkOutButton"
                  >
                    Check Out
                  </Button>
                </Link>
              </div>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PickMeals;
