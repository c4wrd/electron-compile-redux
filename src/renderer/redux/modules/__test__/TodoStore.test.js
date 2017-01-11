import { CONSTANTS, addTodo, removeTodo, removeCompleted, toggleTodo } from "../TodoStore";

describe("test", () => {

    it("should add a todo", () => {

        const text = "test";

        var expectedResult = {
            type: CONSTANTS.TODO_ADD,
            text
        };

        expect(addTodo(text))
            .toEqual(expectedResult);

    })
})