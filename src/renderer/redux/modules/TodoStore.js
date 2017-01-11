import * as _ from "lodash";
import Immutable from "immutable";

import { createReducer } from "../../util";

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

export default createReducer(getInitialState(), {
    [TODO_ADD](state, { text }) {
        /**
         * Adds a new todo to the state,
         * with the text specified by the payload
         */
        let todo = new Todo(text);
        return {
            ...state,
            todos: state.todos.push(todo)
        }
    },
    [TODO_TOGGLE_COMPLETE](state, { id }) {
        return {
            ...state,
            todos: state.todos.map((todo) => {
                var complete = 
                    (todo.id == id) ? !(todo.complete) : todo.complete;
                return {
                    ...todo,
                    complete
                }
            })
        }
    },
    [TODO_REMOVE](state, { id }) {
        /**
         * Removes the todo with the specified id from
         *  the current state
         */
        return {
            ...state,
            todos: state.todos.filterNot((todo) => todo.id == id)
        }
    },
    [TODO_REMOVE_COMPLETE](state) {
        /**
         * Filters out todos that are not complete yet
        */
        return {
            ...state,
            todos: state.todos.filterNot(todo => todo.complete)
        }
    }
});

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