import React from 'react'
import LogInPopUP from '../LogInPopUp/LogInPopUp';
import SignUpPopUp from '../SignUpPopUp/SignUpPopUp';

const Showcase = () => {
  return (
    <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id = "Showcase">
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <div>
          <h1 style={{fontFamily:"Comfortaa", fontSize:"57px"}} ><strong>Welcome to</strong><span className="text-primary" style={{fontFamily:"Comfortaa", fontSize:"57px"}}> <strong>Mirchi Meals</strong></span></h1>
          <p className="lead my-4" style={{fontFamily:"Comfortaa", fontSize:"27px"}}>
            We provide breakfast, lunch, and dinner at your convinience
          </p>
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <SignUpPopUp/>
            </div>  
            <div className="col-md p-5">
              <LogInPopUP/>
            </div>
          </div>        
        </div>
        <img className="img-fluid w-50 d-none d-sm-block" src={require("../../Resources/tiffinImg.png")} alt={"Carlie Anglemire"}/>
      </div>
    </div>
  </section>
  );
}

export default Showcase;