import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">E Commerce</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav className="mr-auto">
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Link href="/customer">Customer</NavDropdown.Link>
                        <NavDropdown.Link href="/customer/add">Add Customer</NavDropdown.Link>
                        <NavDropdown.Link href="/customer/delete">Delete Customer</NavDropdown.Link>
                        <NavDropdown.Link href="/customer/update">Update Customer</NavDropdown.Link>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
