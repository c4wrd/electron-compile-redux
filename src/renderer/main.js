import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore";
import TodoApp from './components/TodoApp';

// Here is where you should initialize your 
// store state from somewhere
const initialStoreState = undefined;

const store = configureStore(initialStoreState);

ReactDOM.render(<Provider store={store}>
                    <TodoApp/>
                </Provider>, document.getElementById('app'));