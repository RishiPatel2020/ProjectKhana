import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function NavBar() {


  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" >
        <Container style={{backgroundColor:"rgba(255,153,0)"}}>
          <Navbar.Brand href='/#'><img src={require("../../Resources/logo.png")}  style={{width:"250px"}} ></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            <Nav.Link href="#/about"><strong style={{fontFamily:"Comfortaa", fontSize:"27px"}}>About</strong></Nav.Link>
            <Nav.Link href="/#"><strong style={{fontFamily:"Comfortaa", fontSize:"27px"}}>Plans</strong></Nav.Link>
            <Nav.Link href="/#"><strong style={{fontFamily:"Comfortaa", fontSize:"27px"}}>Help</strong></Nav.Link>
          
              
            </Nav>
            

              <Nav>

              
              <Navbar.Text  style={{color: "rgba(255,255,255,.55)",marginRight:"15px"}} >
                  <strong style={{fontFamily:"Comfortaa", fontSize:"20px", color:"white"}}>Signed in as : </strong>
                </Navbar.Text> 

                <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <strong style={{fontFamily:"Comfortaa", fontSize:"20px", color:"white"}}>Mav Pillay</strong>
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