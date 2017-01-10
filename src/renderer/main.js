import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";

/** Application imports */
import Reducers from "./redux/modules";
import TodoApp from './components/TodoApp';

// Here is where you should initialize your store state
const initialStoreState = undefined;

const middleware = [
    createLogger(),
    thunk
]

// create a stub that we can populate with our initial state
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

let rootReducer = combineReducers({
    ...Reducers,
    routing: routerReducer
});

const store = createStoreWithMiddleware(rootReducer, initialStoreState);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={TodoApp}/>
                    </Router>
                </Provider>, document.getElementById('app'));