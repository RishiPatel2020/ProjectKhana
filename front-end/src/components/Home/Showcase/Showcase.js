import React from "react";
import LogInPopUP from "../../NavBar/LogInPopUp/LogInPopUp";
import SignUpPopUp from "../../NavBar/SignUpPopUp/SignUpPopUp";
import background from "../../../Resources/Background/newGradient.png";

const Showcase = ({ loggedIn, setLogIn }) => {
  return (
    <section
      className="bg-primary text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      id="Showcase"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        fontFamily: "Signika",
      }}
    >
      <div className="container">
        <div className="d-sm-flex align-items-center my-0.1">
          <div
            style={{
              backgroundColor: "rgb(98, 10, 21)",
              opacity: 0.91,
              paddingLeft: "25px",
              paddingRight: "25px",
              marginBottom: "55px",
              boxShadow: "15px 15px 15px black",
              borderRadius: "25px",
            }}
          >
            <div
              style={{ marginBottom: "-20px", fontSize: "4em" }}
              className="text-primary"
            >
              <strong>Ready-to-Eat</strong>
            </div>

            <div
              style={{ marginBottom: "-20px", fontSize: "4em" }}
              className="text-primary"
            >
              <strong>All In One</strong>
            </div>
            <div
              style={{ marginBottom: "-20px", fontSize: "4em" }}
              className="text-primary"
            >
              <strong>Indian Cuisine</strong>
            </div>

            <div style={{ marginTop: "30px" }}>
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

            {!loggedIn && (
              <div className="row align-items-center justify-content-between my-4">
                <div className="col-md">
                  <SignUpPopUp
                    style={{ buttonColor: "secondary", textColor: "white" }}
                    setLogIn={setLogIn}
                  />
                </div>
                <div className="col-md p-5">
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
