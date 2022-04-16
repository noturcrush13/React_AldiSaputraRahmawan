import React from 'react'
import {Navbar, Container, Offcanvas, NavDropdown, Nav, Form, FormControl, Button} from "react-bootstrap"
import './css/bootstraps/bootstrap.min.css'
import './css/navbar.css'


export default function NavigationBar() {
  return (
<Navbar bg="primary" expand={false}>
  <Container fluid>
    <Navbar.Brand className='navbar-title' href="#">React Weekly</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      bg='light'
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">React Weekly</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <NavDropdown title="React Task" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Introduction React</NavDropdown.Item>
            <NavDropdown.Item href="#action4">React Fundamental</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Event Handling</NavDropdown.Item>
            <NavDropdown.Item href="#action3">React Hook</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Basic Form</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Global State Management</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}
