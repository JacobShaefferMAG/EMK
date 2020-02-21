import { createStore, combineReducers } from 'redux';
import root from './modules/root';
import initialStore from './initialStore';

const reducer = combineReducers({
	root
});

const configureStore = () => createStore(reducer, initialStore);
export default configureStore;