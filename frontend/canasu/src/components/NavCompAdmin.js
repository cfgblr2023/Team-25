import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export default function NavCompAdmin() {
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="/">APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link> */}
              
              <Nav.Link as={Link} to={"/addmentee"}>
                Add Mentee
              </Nav.Link>
              {/* <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link> */}
              <Nav.Link as={Link} to={"/viewadmin"}>
                View admin
              </Nav.Link>
              
              
            </Nav>
            <Nav className="ml-auto">
                
                {/* <Nav.Link onClick={()=>updateParentState({})}>Logout</Nav.Link> */}

                <Nav.Link as={Link} to={"/logout"}> Logout</Nav.Link>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
