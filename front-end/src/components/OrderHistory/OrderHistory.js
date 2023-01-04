import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import React from "react";
import Table from "react-bootstrap/Table";
import userSession from "../../Service/userSession";

const OrderHistory = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  const toHomePage = () => {
    navigate("/");
  };
  const noHistory = () => {
    return (
      <section
        className="md-primary"
        style={{ fontFamily: "Signika", padding: "64px 32px" }}
      >
        <div
          className="container text-center"
          style={{
            marginRight: "auto",
            marginBottom: "340px",
            marginLeft: "auto",
          }}
        >
          <div style={{ marginTop: "40px" }}>
            {/* Image */}
            <img
              className="img-fluid"
              src={require("../../Resources/Vector/noHistory.png")}
              style={{ height: "60%", width: "50%" }}
            />
            {/* Help Text */}
            <div style={{ marginTop: "" }}>
              <p
                className=""
                style={{
                  fontSize: "2.5vw",
                  marginTop: "8.5vh",
                  marginBottom: "6.5vh",
                }}
              >
                Uh-Oh! Looks like you don't have any orders yet! Try our meals
                now!
              </p>

              {/* Order Button */}
              <div className="h-100 d-flex align-items-center justify-content-center">
                <Link to="/order">
                  <Button
                    variant="secondary"
                    className="text-primary"
                    style={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "25px",
                      fontSize: "25px",
                    }}
                  >
                    Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const mealsFormated = (meals)=>{
    let rslt="";
    for (let i = 0; i < meals.length; i++) {
      const element = meals[i];
      i===(meals.length-1)?rslt+=element:(rslt+=element+", ");
    }
    return rslt; 
  }

  const history = () => {
    const orders = userSession.getUser().orderHistory;
    return (
      <section
        className="bg-primary"
        style={{ fontFamily: "Signika", padding: "64px 32px" }}
      >
        <Table striped bordered hover style={{ fontSize: "calc(16px+1vw)" }}>
          <thead>
            <tr>
              <th>Meal Size</th>
              <th>Types of Meals</th>
              <th>Price</th>
              <th>Date Ordered</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const { size, meals, price, orderDate, deliveryDate } = order;
              return (
                <tr>
                  <td>{size}</td>
                  <td>{mealsFormated(meals)}</td>
                  <td>{price}</td>
                  <td>{orderDate}</td>
                  <td>{deliveryDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
    );
  };

  const viewOrderHistoryPage = () => {
    return userSession.getUser().orderHistory ? history() : noHistory();
  };
  return <>{isLoggedIn ? viewOrderHistoryPage() : toHomePage()}</>;
};

export default OrderHistory;
