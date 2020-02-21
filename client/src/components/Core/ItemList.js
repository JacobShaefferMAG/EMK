import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ todos }) => {
	console.log(todos);
	return (
		<div>
			{todos && todos.length
				? todos.map((todo, idx) => {
					return <div key={idx}>{todo}</div>
				})
				: "nothing yet"
			}
		</div>
	)
}

export default connect(
	(store) => ({
		todos: store.root.todos
	})
)(ItemList);