import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider as ReduxProvider} from 'react-redux';
import rootReducer from './redux/reducers/rootReducer';
import {fetchAllBooks} from './services/apiService';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllBooks())

ReactDOM.render(<ReduxProvider store={store}><App /></ReduxProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
