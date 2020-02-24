import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function NavBar(){
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>EMK</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<IndexLinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</IndexLinkContainer>
					<LinkContainer to="/recipes">
						<Nav.Link>Recipes</Nav.Link>
					</LinkContainer>
				</Nav>
				<Nav>
					<LinkContainer to="#">
						<Nav.Link>Login</Nav.Link>
					</LinkContainer>
					<LinkContainer to="#">
						{/* <Nav.Link>Register</Nav.Link> */}
						<Button variant="outline-warning">Register</Button>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}