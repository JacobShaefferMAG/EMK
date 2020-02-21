import React from 'react';
import { connect } from 'react-redux';
// import {} from '../../redux/modules/home';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {

	render(){
		return(
			<Container>

				<Row>
					<Col>
						<Jumbotron>
							<h1 className="display-4">Welcome</h1>
							<p className="lead">
								If you need help emptying your fridge, then you've come to the right place!
							</p>
						</Jumbotron>
					</Col>
				</Row>

				<Row>
					<Col>
						<p>
							Empty My Kitchen is the solution to a personal desire. We wanted 
							an easy place to keep all of my recipes that also lets me easily 
							make a list of needed items from the grocery store. <br/> The
							name, "Empty My Kitchen" comes from a style of thought were the 
							pantry and refrigerator are not there to be filled with food, 
							but instead	there to be emptied. We use this technique in our 
							house, and it has lead to many new and fun things we never would 
							have tried previously.
						</p>	
					</Col>
				</Row>

			</Container>
		);
	}
}

export default connect()(Home);