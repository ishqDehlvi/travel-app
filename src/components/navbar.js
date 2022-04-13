
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'

const Navigation = () => {
  return(
    <>
      <div class='band h-4 w-full' style={{backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home" style={{fontSize:'24px'}}>Jazeera Travels</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
    </Nav>
    <Nav>
              <Nav.Link style={{color:'black'}} href='/'>Hotel</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Bus</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Train</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Cruise</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Flight</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Visa</Nav.Link>
              <Nav.Link style={{color:'black'}} href='/'>Blog</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>


    );
}
export default Navigation;