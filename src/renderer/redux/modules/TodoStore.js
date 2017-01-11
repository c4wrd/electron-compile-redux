import * as _ from "lodash"
import Immutable from "immutable"

const TODO_ADD = "TODO_ADD";
const TODO_REMOVE = "TODO_REMOVE";
const TODO_TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
const TODO_REMOVE_COMPLETE = "REMOVE_COMPLETE";

export var CONSTANTS = {
    TODO_ADD,
    TODO_REMOVE,
    TODO_TOGGLE_COMPLETE,
    TODO_REMOVE_COMPLETE
}

class Todo {
    constructor(text) {
        this.text = text;
        this.id = Date.now();
        this.complete = false;
    }
}

function getInitialState() {
    return {
        todos: Immutable.List(),
        name: "Invalid"
    }
}

export default function reduce(state=getInitialState(), action) {

    const type = action.type;

    switch ( type ) {
        case TODO_ADD: {
            /**
             * Adds a new todo to the state,
             * with the text specified by the payload
             */
            let todo = new Todo(action.text);
            return {
                ...state,
                todos: state.todos.push(todo)
            }
        }
        case TODO_TOGGLE_COMPLETE: {
            /**
             * Toggles the complete status of the todo with the 
             * id specified by the action
             */
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    var complete = 
                        (todo.id == action.id) ? !(todo.complete) : todo.complete;
                    return {
                        ...todo,
                        complete
                    }
                })
            }
        }
        case TODO_REMOVE: {
            /**
             * Removes the todo with the specified id from
             *  the current state
             */
            return {
                ...state,
                todos: state.todos.filterNot((todo) => todo.id == action.id)
            }
        }
        case TODO_REMOVE_COMPLETE: {
            /**
             * Filters out todos that are not complete yet
             */
            return {
                ...state,
                todos: state.todos.filterNot(todo => todo.complete)
            }
        }
    }

    return state;
}

export function addTodo(text) {
    return {
        type: TODO_ADD,
        text
    }
}

export function removeTodo(id) {
    return {
        type: TODO_REMOVE,
        id
    }
}

export function toggleTodo(id) {
    return {
        type: TODO_TOGGLE_COMPLETE,
        id
    }
}

export function removeCompleted() {
    return {
        type: TODO_REMOVE_COMPLETE
    }
}