import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
const Help = () => {
  return (
    <section
      className="mealPlans bg-primary"
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
          <img
            className="img-fluid"
            src={require("../../Resources/Vector/help.png")}
          />
          <div style={{ marginTop: "30px" }}>
            <p className="">
              Any inquiries, comments, or concerns, please address to:
              inquiries@mirchimeals.com
            </p>
            <p>
              Our support staff will get back to you in less than 3 hours.
              Promise :)
            </p>
            <p>
              Please check our FAQ section to see if you can find the answer to
              your question.{" "}
            </p>
            <p>In the meantime, try out our meals.</p>

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

export default Help;
