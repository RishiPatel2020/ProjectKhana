import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Khana</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Menu</Nav.Link>
              <Nav.Link href="#pricing">How It Works</Nav.Link>
              <Nav.Link href="#menu">Help</Nav.Link>
              <Nav.Link href="#menu">Log In</Nav.Link>
              <Nav.Link href="#menu">Sign Up</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Account Info</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Account Info
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Navbar.Text  style={{color: "rgba(255,255,255,.55)"}} >
                Signed in as: <a href="#login"  style={{color: "rgba(255,255,255,.55)"}} >Mav Patil</a>
              </Navbar.Text> 
            
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
export default NavBar;