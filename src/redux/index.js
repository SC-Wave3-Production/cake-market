import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
