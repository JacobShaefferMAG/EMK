import React from "react";
import AddItem from './AddItem';
import ItemList from './ItemList';

class Core extends React.Component {
	render() {
		return (
			<div>
				<h1>List</h1>
				<AddItem/>
				<ItemList/>
			</div>
		);
	}
}

export default Core;