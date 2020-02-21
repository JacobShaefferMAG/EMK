import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Home from './components/home';
import Recipes from './components/recipes';
import NavBar from "./components/common/NavBar";

class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	render() {
		return (
			<Router>
				<NavBar/>
				<Switch>
					<Route path='/recipes'>
						<Recipes/>
					</Route>
					<Route path='/'>
						<Home/>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;