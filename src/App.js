import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import React from 'react'
import { Button, Container, Row, Card } from 'react-bootstrap';
import Navbar from './components/Navbar'
import './App.css';

function BookDetailPage ()
{
  const {id} = useParams();
  const [abook, setaBook] = useState({})
  useEffect(() => {
    async function fetchaBook() {
      const resp = await fetch('http://localhost:5000/books' + id);
      const json = await resp.json()
      console.log({ json })
      setaBook(json);
    }
    fetchaBook();
  }, [])
  return (
    <div> 
      <h1> Book Details</h1> 
      {/* <Row>
        {
          abook.map((b2) => {
            return (
              <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'http://localhost:5000/' + b2.imageLink + id} />
                <Card.Body>
                  <Card.Title>{b2.title}</Card.Title>
                  <Card.Text> {b2.author}</Card.Text>
                  <Card.Text>{b2.language} </Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </Row> */}
      </div>
  )
}

function Homepage() {
  const [pageNum, setPageNum] = useState(1)
  const [query, setQuery] = useState ('')
  const [limit, setLimit] = useState (10)
  const [books, setBook] = useState([])
  
  async function fetchBook() {
    let urlParams = `?_page=${pageNum}&_limit=${limit}`
    if (query !== '' )
    {urlParams = urlParams + `&q=${query}`}
    const resp = await fetch('http://localhost:5000/books' + urlParams);
    const json = await resp.json();
    console.log({ json });
    setBook(json);
  }
  
  useEffect(() => { 
    fetchBook();
  }, []); 

  const onSearch = (e) => {
    setQuery(e.target.value)
    fetchBook();
  }

  console.log({query})
  return (
    <div>
      <h1>Home Page </h1>
      <input onChange= {onSearch}/>
      <Row>

        {
          books.map((b) => {
            return (
              <Card className="m-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'http://localhost:5000/' + b.imageLink} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text> {b.author}</Card.Text>
                  <Card.Text>{b.language} </Card.Text>
                  <Button variant="primary" as = {Link} to = {"/books/" +b.id}>More Details</Button>
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
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Homepage} />
         <Route path="/books/:id" exact component={BookDetailPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
