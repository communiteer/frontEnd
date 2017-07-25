import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	PixelRatio,
	View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk';
import reducers from './reducers';

import RouterComponent from './Router';





class App extends Component {
	render () {
	const store = createStore(reducers, {}, applyMiddleware(Thunk))
		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}



export default App;

