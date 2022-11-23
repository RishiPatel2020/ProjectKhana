import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {


  return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light" >
        <Container >
          {/* <Navbar.Brand href='/'><img src={require("../../Resources/logo.png")}  style={{width:"250px"}} ></img></Navbar.Brand> */}
          <Navbar.Brand><Link to = "/ProjectKhana">  <img src={require("../../Resources/logo.png")}  style={{width:"250px"}} ></img> </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/about" style={{ textDecoration: 'none', marginRight:"30px"}}><strong style={{fontFamily:"Comfortaa", fontSize:"27px", color:"rgb(247, 193, 68)"}}>About</strong></Link></Nav.Link>    
              <Nav.Link ><Link to="/ProjectKhana" style={{ textDecoration: 'none',  marginRight:"30px" }}><strong style={{fontFamily:"Comfortaa", fontSize:"27px", color:"rgb(247, 193, 68)"}}>Plans</strong></Link></Nav.Link>
              <Nav.Link><Link to="/ProjectKhana" style={{ textDecoration: 'none' ,  marginRight:"90px"}}><strong style={{fontFamily:"Comfortaa", fontSize:"27px", color:"rgb(247, 193, 68)"}}>Help</strong></Link></Nav.Link>

          
              
            </Nav>
            

              <Nav>

              
              <Navbar.Text  style={{color: "rgba(255,255,255,.55)",marginRight:"15px"}} >
                  <strong style={{fontFamily:"Comfortaa", fontSize:"20px", color:"white"}}>Signed in as : </strong>
                </Navbar.Text> 

                <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                <strong style={{fontFamily:"Comfortaa", fontSize:"20px", color:"rgb(98, 10, 21)"}}>Mav Pillai</strong>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                
              
              
              </Nav>

            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;