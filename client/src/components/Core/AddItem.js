import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleButton, addTodo } from '../../redux/actions';

class AddItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {input: ""}
	}

	updateInput = input => {
		this.setState({ input });
	}

	handleAddTodo = () => {
		const { input } = this.state;
		this.setState({input: ''});
		this.props.toggleButton();
		this.props.addTodo(input);
	}

	render(){
		return (
			<div>
				<TextField onChange={e => this.updateInput(e.target.value)} value={this.state.input}/>
				<Button variant='contained' color='primary' onClick={this.handleAddTodo}>
					{this.props.value}
				</Button>
			</div>
		);
	}
};

const mapStoreToProps = (store /*, ownProps*/) => {
	return {
		value: store.core.buttonState
	}
};
const mapDispatchToProps = { toggleButton, addTodo };

export default connect(
	mapStoreToProps,
	mapDispatchToProps
)(AddItem);