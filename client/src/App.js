import React from "react";
import "./styles.css";
import { Store, values } from "./context/store";
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toggleValue = () => {
			this.setState(state => ({
				value: state.value === values.a ? values.b : values.a
			}))
		}

		this.state = { 
			value: values.a,
			toggleValue: this.toggleValue
		};
	}

	render() {
		return (
			<Store.Provider value={this.state}>
				<div className="todo-app">
					<h1>List</h1>
					<AddItem/>
					<ItemList/>
				</div>
			</Store.Provider>
		);
	}
}

export default App;