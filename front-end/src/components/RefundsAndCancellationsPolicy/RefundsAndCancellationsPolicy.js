import { useEffect } from "react";
import ScrollTop from "../../Service/ScrollTop";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import React from "react";

const RefundsAndCancellationsPolicy = () => {
  useEffect(() => {
    ScrollTop.scrollUp();
  }, []);
  return (
    <section
      style={{ fontFamily: "Signika", padding: "10px", marginBottom: "40px" }}
    >
      <h1 className="text-center mb-4">Refund and Cancelation Policy</h1>

      <div className="container my-3">
        <h4>Cancellation Policy</h4>
        <p>
          Customers can cancel their orders up till 3 PM EST the Saturday before
          the order's delivery date, via email. This is a hard deadline, and
          emails received after 3PM EST are considered not eligible for
          cancellation.
        </p>
        <p className="my-2">
          Please send all cancellation emails with your name and order number to
          <span style={{ color: "blue", marginLeft: "4px" }}>
            support@mirchimeals.com
          </span>
        </p>
      </div>

      <div className="container my-3">
        <h4>Refund Policy</h4>
        <p>
          We will try our best to satisfy customers. In case you are not
          satisfied with our products, please write to us at
          <span style={{ color: "blue", marginLeft: "4px" }}>
            support@mirchimeals.com
          </span>
        </p>
        <p className="my-2">
          Meals are not eligible for return. Any returns due to default of the
          company of damaged product or bad product quality will be taken into
          consideration. With your feedback and concerns, we will process a
          refund where appropriate after review. If paid by credit card, refunds
          will be issued to the original credit card provided at the time of
          purchase. The amount will be credited in the same account from where
          it's deducted within 7 to 10 days.
        </p>
      </div>

      <div className="container my-3">
        <h4>Contact Us</h4>

        <p className="my-2">
          If you have any questions about the Refund and Cancellation Policy,
          You can contact us by email at{" "}
          <span style={{ color: "blue", marginLeft: "4px" }}>
            support@mirchimeals.com
          </span>
        </p>
      </div>

      <div className="container">
        <h2 className="mb-4">Try Mirchi Meals!</h2>
        <div className="d-flex align-items-left justify-content-left mb-3">
          <Link to="/order">
            <Button
              variant="secondary"
              className="text-primary"
              style={{
                height: "40px",
                width: "107px",
                borderRadius: "9px",
                fontSize: "25px",
                padding: "1px",
              }}
            >
              Order
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RefundsAndCancellationsPolicy;
