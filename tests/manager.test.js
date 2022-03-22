const Employee = require("../lib/employee");

describe("promptManager", () => {
  // Positive Tests
  it("should return an object with properties", () => {
    // Arrange
    const todoList = new ;
    const todoText = "Mow Lawn";

    // Act
    todoList.addTodo(todoText);

    // Assert
    expect(todoList.todos.length).toEqual(1);
    expect(todoList.todos[0] instanceof Todo).toEqual(true);
    expect(todoList.todos[0].text).toEqual(todoText);
  });

  // Exception test
  it("should throw an error if not provided text", () => {
    // Arrange
    const todoList = new TodoList();
    const err = new Error(
      "Expected parameter 'text' to be a non empty string"
    );
    const cb = () => todoList.addTodo();

    // Assert
    expect(cb).toThrowError(err);
  });
});