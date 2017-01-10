import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { combineReducers ,createStore, applyMiddleware } from "redux";

// Import our root reducer module.
import RootReducer from "./modules";

/**
 * Creates a list of middleware modules. 
 * createLogger creates a logger for Redux,
 * and thunk provides the ability to dispatch
 * actions within an action creator.
 */
const middleware = [
    createLogger(),
    thunk
]

// create a stub that we can populate with our initial state
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

/**
 * Creates a store to be configured with the initial
 * state of the store, which can be configured to be loaded
 * from some local storage provided by Electron.
 */
export default function configureStore(initialState) {
    return createStoreWithMiddleware(RootReducer, initialState);
}