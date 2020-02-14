import React from 'react';
import { Store } from '../context/store';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

function AddItem(props) {
	return (
		<Store.Consumer>
			{({value, toggleValue}) => (
				<div>
					<TextField></TextField>
					<Button variant='contained' color='primary' onClick={toggleValue}>
						{value}
					</Button>
				</div>
			)}
		</Store.Consumer>
	);
}

export default AddItem;