import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Home from './components/home';
import Recipes from './components/recipes';
import NavBar from "./components/common/NavBar";
import Container from "react-bootstrap/Container";

class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	render() {
		return (
			<Router>
				<Container>

					<NavBar/>
					<Switch>
						<Route path='/recipes'>
							<Recipes/>
						</Route>
						<Route path='/'>
							<Home/>
						</Route>
					</Switch>

				</Container>
			</Router>
		);
	}
}

export default App;