import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App-Root/App.components';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<AppWrapper />
			</BrowserRouter>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
