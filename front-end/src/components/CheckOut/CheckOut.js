import { Button } from "react-bootstrap";
import userSession from "../../Service/userSession";
import React from "react";
import { useNavigate } from "react-router-dom";
const CheckOut = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/pickMeals");
  };
  const checkOutContent = () => {
    return (
      <>
        <div className="justify-content-center backButtonContainer">
          <Button
            variant="secondary"
            className="position-fixed backButton"
            onClick={() => handleBack()}
            style={{ fontFamily: "Signika", color: "white" }}
          >
            Back
          </Button>
        </div>
        <p className="lead">You did not log in</p>
      </>
    );
  };
  return (
    <>
      {userSession.isLoggedIn() ? checkOutContent() : <div>not logged in </div>}
    </>
  );
};

export default CheckOut;
