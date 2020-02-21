import React from 'react';
import { connect } from 'react-redux';
// import {} from '../../redux/modules/home';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Recipes extends React.Component {

	render(){
		return(
			<Container>

				<Row>
					<Col>
						<Card>
							<Card.Img variant="top"/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Card Text</Card.Text>
								<Button variant="primary">Go Somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Img variant="top"/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Card Text</Card.Text>
								<Button variant="primary">Go Somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Img variant="top"/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>Card Text</Card.Text>
								<Button variant="primary">Go Somewhere</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>

			</Container>
		);
	}
}

export default connect()(Recipes);