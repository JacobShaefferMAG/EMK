
import React from 'react';
import { Store } from '../context/store';

function ItemList(props) {
	return (
		<Store.Consumer>
			{({value, toggleValue}) => (
				<div>test</div>
			)}
		</Store.Consumer>
	);
}

export default ItemList;