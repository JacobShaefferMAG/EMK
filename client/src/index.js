import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';

import App from "./App";
import configureStore from "./redux/configureStore";

const rootElement = document.getElementById("root");

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	
, rootElement);