//import Navbar from './component/Navbar';
import './App.css';
import { Switch, Route } from "react-router-dom";
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, Container, Row, Card } from 'react-bootstrap';

import { Link, /*useParams*/ } from "react-router-dom";
import { useState, useEffect } from 'react'



// 1. Fetch book Data => render book card to the screen 
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


function Homepage() {
  const [books, setBook] = useState([])
  useEffect(() => {
    async function fetchBook() {
      const resp = await fetch('http://localhost:5000/books')
      const json = await resp.json()
      console.log({ json })
      setBook(json);
    }
    fetchBook();
  }, [])

  return (
    <div>
      <h1>Home Page </h1>
      <Row>

        {
          books.map((b) => {
            return (
              <Card className = "m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'http://localhost:5000/' + b.imageLink} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>
                  {b.author}
          </Card.Text>
          <Card.Text>
                  {b.language}
          </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </Row>
    </div>
  )
}

function App() {
  return (

    <div className="App">
       <Navibar />
      <Container>  
      <Switch>
        <Route path="/home" component={Homepage} />
      </Switch> 
      </Container>
    </div>
  );
}

export default App;
