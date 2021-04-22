import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from '../logo.svg'
import { Link } from "react-router-dom"; 

export default function Navibar() {
    return (
        <div>
        <Navbar bg="light" expand="lg">  
        <Navbar.Brand href="#home"><img src={logo} alt = "Coderschool" width = "50px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as= {Link} to = "/home">Home Page</Nav.Link>
            <Nav.Link as= {Link} to = "/blog">Blog</Nav.Link>
            <Nav.Link as= {Link} to = {"/job/" + "id"}>Job</Nav.Link>
            <Nav.Link href="#link">Without Link</Nav.Link>
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
