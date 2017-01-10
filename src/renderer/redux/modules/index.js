// Import your modules here
import TodoStore from "./TodoStore";

// Map each module to some store on the state
// object. This must be exported as an object,
// not as the result of combineReducers.
export default {
    todoStore: TodoStore
}