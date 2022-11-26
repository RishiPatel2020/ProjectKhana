import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';
function NavBar({loggedIn,setLogIn}) {

  const logOut = ()=>{
    setLogIn(false);
    localStorage.removeItem("user"); 
  }


  


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
            
              {loggedIn&& 
              <Nav>

              

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

              <Navbar.Text  style={{color: "rgba(255,255,255,.55)",marginLeft:"15px"}} >
                  <strong style={{fontFamily:"Signika", fontSize:"20px", color:"white"}}>{JSON.parse(localStorage.getItem("user")).user}</strong>
                </Navbar.Text> 
                
              
              
              </Nav>

              }
              
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;