import React from "react";
import LogInPopUP from "../../NavBar/LogInPopUp/LogInPopUp";
import SignUpPopUp from "../../NavBar/SignUpPopUp/SignUpPopUp";
import background from "../../../Resources/Background/newGradient.png";
import "./Showcase.css";
const Showcase = ({ loggedIn, setLogIn }) => {
  return (
    <section
      className="bg-primary text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start backgroundImage"
      id="Showcase"
      style={{
        // Background Image
        backgroundImage: `url(${background})`
      }}
    >
      <div className="container">
        <div className="d-sm-flex align-items-center my-0.1">
          {/* Red Box */}
          <div className="boxing">
            {/* Big Texts */}
            <div className="bigTexts">
              {/* Text 1 */}
              <div className="text-primary">
                <strong>Ready-to-Eat</strong>
              </div>

              {/* Text 2 */}
              <div className="text-primary">
                <strong>All In One</strong>
              </div>

              {/* Text 3 */}
              <div className="text-primary">
                <strong>Indian Cuisine</strong>
              </div>
            </div>

            {/* Text 4,5,6 */}
            <div className="smallTexts">
              <br></br>
              <span className="lead text-primary" style={{ fontSize: "1.7em" }}>
                <span className="text-primary">Freshly Cooked</span>
                <br></br>
                <span style={{ color: "rgb(255,87,20)" }}>
                  Authentic Tastes
                </span>
                <br></br>
                No Preservatives
              </span>
            </div>

            {/* ONLY if user not logged in  */}
            {!loggedIn && (
              <div className="row align-items-center justify-content-between my-4">
                <div className="col-md">
                  {/* Sign Up Button */}
                  <SignUpPopUp
                    style={{ buttonColor: "secondary", textColor: "white" }}
                    setLogIn={setLogIn}
                  />
                </div>
                <div className="col-md buttonsSpacing">
                  {/* Log In Button */}
                  <LogInPopUP
                    style={{ buttonColor: "secondary", textColor: "white" }}
                    setLogIn={setLogIn}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
