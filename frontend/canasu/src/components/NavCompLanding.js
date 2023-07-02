import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export default function NavComp(props) {
  return (
    <div>
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="/">NANASU WAY</Navbar.Brand>
        
        </Container>
      </Navbar>
    </div>
  );
}
