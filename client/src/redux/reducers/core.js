import { 
	TOGGLE_BUTTON,
	ADD_TODO
} from '../actions/actionTypes';

const initialStore = {
	buttonState: 'a',
	todos: ['this is a test']
};

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