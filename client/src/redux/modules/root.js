import initialStore from '../initialStore';

// Actions
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
export const ADD_TODO = 'ADD_TODO';

// Reducer
export default function(store = initialStore, action){
	switch (action.type){
		case TOGGLE_BUTTON: {
			return {
				...store,
				buttonState: store.buttonState === 'a' ? 'b' : 'a'
			};
		}
		case ADD_TODO: {
			const { content } = action.payload;
			console.log("content: ", content);
			return {
				...store,
				todos: [...store.todos, content]
			}
		}
		default:
			return store;
	}
}

// Action Creators
export const toggleButton = () => ({type: TOGGLE_BUTTON});
export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: {
		content
	}
})

// Thunk Creators
