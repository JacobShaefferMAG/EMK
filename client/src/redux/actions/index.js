import {
	TOGGLE_BUTTON,
	ADD_TODO
} from './actionTypes';

export const toggleButton = () => ({
	type: TOGGLE_BUTTON
});

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		content
	}
})