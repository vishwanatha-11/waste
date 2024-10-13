// import {combineReducers, createStore,applyMiddleware} from 'redux';

// import thunk from 'redux-thunk';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import { todosReducer } from './reducers/todosReducer';


// const reducer= combineReducers({
//     todos:todosReducer
// })
// const Middleware=[thunk]; 

// const store=createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(... Middleware))
// )
// export default store
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducers } from './reducers/todosReducer';

const reducer = combineReducers({
    todos: todosReducers
});

const Middleware = [thunk]; 

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;
