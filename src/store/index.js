import { positionReducer } from './positionReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(positionReducer, composeWithDevTools(applyMiddleware()))