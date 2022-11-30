import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'bootstrap';
import { Offcanvas } from 'react-bootstrap';

function NavBar({loggedIn,setLogIn,cart,setCart}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = ()=>{
    setLogIn(false);
    localStorage.removeItem("user"); 
  }


  const clearCart=()=>{
    setCart([]); 
  };


  


  return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light" >
        <Container style={{fontFamily:"Signika"}}>
          {/* <Navbar.Brand href='/'><img src={require("../../Resources/logo.png")}  style={{width:"250px"}} ></img></Navbar.Brand> */}
          <Navbar.Brand><Link to = "/">  <img src={require("../../Resources/Logo/mirchiMealsLogo.png")}  style={{width:"200px",height:"90px"}} alt="MirchiMealsLogo" ></img> </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto" defaultActiveKey="/home">
              <Nav.Link><Link to="/about" style={{ textDecoration: 'none', marginRight:"30px"}}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>About</strong></Link></Nav.Link>    
              <Nav.Link ><Link to="/order" style={{ textDecoration: 'none',  marginRight:"30px" }}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>Order</strong></Link></Nav.Link>
              <Nav.Link><Link to="/help" style={{ textDecoration: 'none' ,  marginRight:"90px"}}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>Help</strong></Link></Nav.Link>

              {/* <Nav.Item><Nav.Link eventKey="/about"><Link to="/about" style={{ textDecoration: 'none', marginRight:"30px"}}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>About</strong></Link></Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link  eventKey="/order"><Link to="/order" style={{ textDecoration: 'none',  marginRight:"30px" }}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>Order</strong></Link></Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="/help"><Link to="/help" style={{ textDecoration: 'none' ,  marginRight:"90px"}}><strong style={{fontSize:"27px", color:"rgb(247, 193, 68)"}}>Help</strong></Link></Nav.Link></Nav.Item> */}

              
              
              

          
              
            </Nav>
            

            {/* User profile  */}
              {loggedIn&& 
              <Nav style={{marginRight:"20px", marginTop:"8px"}}>

              

                  <Navbar.Text  style={{color: "rgba(255,255,255,.55)",marginRight:"15px"}} >
                  <strong style={{fontFamily:"Signika", fontSize:"20px", color:"white"}}>{JSON.parse(localStorage.getItem("user")).user}</strong>
                </Navbar.Text>
                <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                <span class="material-symbols-outlined"> Person</span>
                {/* <strong style={{fontFamily:"Signika", fontSize:"20px", color:"rgb(98, 10, 21)"}}>{JSON.parse(localStorage.getItem("user")).user}</strong> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">View Plans</Dropdown.Item>
                  <Dropdown.Item href="">Account Info</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

 
                
              
              
              </Nav>

              }


              {/* Shopping cart */}


              {cart.length!==0 &&
              
              <Nav style={{marginTop:"8px"}}>



              {/* <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic"> */}

                {/* </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">View Plans</Dropdown.Item>
                  <Dropdown.Item href="">Account Info</Dropdown.Item>
                  <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}


                <button className="bg-light text-dark" style={{border:"0px", height:"45px", width:"63.67px", padding:"6px 12px", borderRadius:"10px"}} onClick={handleShow}>

                <span style={{paddingTop:"4px"}}class="material-symbols-outlined">shopping_cart</span>

                </button>
                


            
    
                





              


              
              

              
              <Offcanvas show={show} onHide={handleClose} placement="end" style={{fontFamily:"Signika"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {
                  cart.map(item=>{
                    return (

                  
                    <div key = {item.id}>
                    
                    <span>{item.numberOfMeals} </span><span>{item.mealName}</span>
                    <br></br>
                    <span>{item.description}</span>
                    <br></br>
                    
                    <br></br>




                    </div>
                    )
                    
                  })
                }

              <div className="h-100 d-flex align-items-center justify-content-center">

              <button onClick={()=>clearCart()} className='text-dark' style={{backgroundColor:"rgb(247, 193, 68)",border:"0px",height:"50px",width:"150px", borderRadius:"25px", fontSize:"25px"}}>Clear Order</button>

              </div>
        </Offcanvas.Body>
      </Offcanvas>


                

              




              
            
            
            </Nav>
              }

              
              
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;