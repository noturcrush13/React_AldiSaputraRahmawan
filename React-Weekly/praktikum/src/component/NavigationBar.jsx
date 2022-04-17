import React from 'react'
import {Navbar, Container, Offcanvas, NavDropdown, Nav, Form, FormControl, Button, DropdownButton} from "react-bootstrap"
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
        <Nav className="justify-content-end flex-grow-1 pe-3 navdropdown">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/introduction-react">
            Introduction React
          </Nav.Link>
          <Nav.Link href="/react-fundamental">
            React Fundamental
          </Nav.Link>
          <Nav.Link href="/event-handling">
            Event Handling
          </Nav.Link>
          <Nav.Link href="/react-hook">
            React Hook
          </Nav.Link>
          <Nav.Link href="/basic-form">
            Basic Form
          </Nav.Link>
          <Nav.Link href="/global-state">
            Global State
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}
