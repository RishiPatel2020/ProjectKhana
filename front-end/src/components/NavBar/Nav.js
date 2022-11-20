import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SessionMaintain from '../../Service/SessionMaintain';

function NavBar() {


  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'><span style={{fontSize:"40px"}}>Khana</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/">Plans & Menu</Nav.Link>
            <Nav.Link href="/">Help</Nav.Link>
          
              
            </Nav>
            

              <Nav>

              
              <Navbar.Text  style={{color: "rgba(255,255,255,.55)"}} >
                  Signed in as:
                </Navbar.Text> 

              <NavDropdown title="Mav Pillai" id="collasible-nav-dropdown">
                  <NavDropdown.Item heref="#action/3.1">Account Info</NavDropdown.Item>
                  <NavDropdown.Item heref="#action/3.2">
                    Edit Plans
                  </NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Item heref="/">Log Out</NavDropdown.Item>

                  
                </NavDropdown>
                
              
              
              </Nav>

            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;