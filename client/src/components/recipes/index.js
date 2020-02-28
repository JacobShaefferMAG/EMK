import React from 'react';
import { connect } from 'react-redux';
// import {} from '../../redux/modules/home';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Recipes extends React.Component {

	render(){
		return(
			<div>

				<Row>
					<Col>
						<CardDeck>
							<Card>
								<Card.Img src="./resources/download.svg"/>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>Card Text</Card.Text>
									<Button variant="primary">Go Somewhere</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top"/>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>Card Text</Card.Text>
									<Button variant="primary">Go Somewhere</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top"/>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>Card Text</Card.Text>
									<Button variant="primary">Go Somewhere</Button>
								</Card.Body>
							</Card>
							<Card>
								<Card.Img variant="top"/>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>Card Text</Card.Text>
									<Button variant="primary">Go Somewhere</Button>
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
				</Row>

			</div>
		);
	}
}

export default connect()(Recipes);