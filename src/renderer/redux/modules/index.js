import { combineReducers } from "redux";

// Import your modules here
import TodoStore from "./TodoStore";

// Map each module to some store on the state
// object.
export default combineReducers({
    todoStore: TodoStore
})