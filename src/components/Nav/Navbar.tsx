import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './logo.png';


export default function Navb(){
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img
              src={Logo}
              width="60"
              height='60'
              className="d-inline-block align-top"
              alt="logo"
              id='logoIcon'
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Instrument Sets" id="basic-nav-dropdown">
              <NavDropdown.Item href="/adjustment">Adjustment Kit</NavDropdown.Item>
              <NavDropdown.Item href="/alignerband">Aligner Banding Kit</NavDropdown.Item>
              <NavDropdown.Item href="/deband">Debanding Kit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}