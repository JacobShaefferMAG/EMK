import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
					<Nav.Link>Account</Nav.Link>
					<Nav.Link>Pantry</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}