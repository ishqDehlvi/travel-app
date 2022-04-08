import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'

const Navigation = () => {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">
          <strong>Jazeera Travels</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href='/'>Jobs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </>


    );
}
export default Navigation;