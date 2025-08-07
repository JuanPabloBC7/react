import { Link } from 'react-router-dom';
import reactLogo from './../../assets/react.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarTop() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className='logo react'>
          <img 
            className="img-fluid mx-auto p-0 me-2" 
            src={reactLogo} 
            alt="React logo" 
            width="30"
            height="30"
          />
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/simple-crud">Simple CRUD</Nav.Link>
            {/* <Nav.Link href="#home">Anchor Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action1">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">Another action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/separated">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;