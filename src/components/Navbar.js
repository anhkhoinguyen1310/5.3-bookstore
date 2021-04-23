import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"; 

 function Navibar() {
  return (
    <div>
      <Navbar className = "navbar-custom" variant="dark" expand="lg">
        <Navbar.Brand bg = "Light" href="#home"><img src= "https://lwfiles.mycourse.app/coderschool-public/33fc8e54f6d5dad7d037060f88c62c18.png" alt="Coderschool" width="200px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">Home Page</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default Navibar;