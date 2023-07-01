import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export default function NavComp() {
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
              
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              {/* <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link> */}
              <Nav.Link as={Link} to={"/faq"}>
                FAQ
              </Nav.Link>
              <Nav.Link as={Link} to={"/chat"}>
                Chat
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                {/* <Nav.Link onClick={()=>updateParentState({})}>Logout</Nav.Link> */}

                <Nav.Link as={Link} to={"/signup"}><i className="fas fa-user"></i> Sign in</Nav.Link>
                
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
