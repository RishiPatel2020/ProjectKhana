import React from 'react'
import LogInPopUP from '../LogInPopUp/LogInPopUp';
import SignUpPopUp from '../SignUpPopUp/SignUpPopUp';

const Showcase = ({loggedIn, setLogIn}) => {
  return (
    <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start" id = "Showcase" style={{fontFamily:"Comfortaa"}}>
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <div>
          <h1 style={{fontSize:"57px"}} ><strong>Welcome to</strong><span className="text-primary" style={{ fontSize:"57px"}}> <strong>Mirchi Meals</strong></span></h1>
          <p className="lead my-4" style={{fontSize:"27px"}}>
          We provide Indian meals to fuel your tight schedules. Mealing done right.  
          </p>
          


          {!loggedIn && 
          
          <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <SignUpPopUp style={{buttonColor:"secondary", textColor:"white"}} setLogIn = {setLogIn}/>
          </div>  
          <div className="col-md p-5">
            <LogInPopUP style={{buttonColor:"secondary", textColor:"white"}} setLogIn = {setLogIn}/>
          </div>
        </div>   
          }
          
               

        </div>
        <img className="img-fluid w-50 d-none d-sm-block" src={require("../../Resources/tiffinImg.png")} alt={"Carlie Anglemire"}/>
      </div>
    </div>
  </section>
  );
}

export default Showcase;