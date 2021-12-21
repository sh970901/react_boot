import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Header from './components/Header';

import { Col, Container, Row } from 'react-bootstrap';
import Navprac from './components/Navprac';



const App = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col><Header></Header></Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col><Navprac></Navprac></Col>
        <Col><Login></Login></Col>
        <Col>3 of 3</Col>
      </Row>
      </Container>
      
      
    </div>
  )
}

export default App







