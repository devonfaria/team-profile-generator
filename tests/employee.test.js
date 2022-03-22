const Employee = require("../lib/employee");

describe("Employer", () => {
  describe("Not Sure", () => {
  // Positive Tests
    it("should return an object", () => {
      // Arrange
      const newEmployee = new Employee ('Devon', '6', 'devon@history.com');
      // Act
      // todoList.addTodo(todoText);
      // Assert
      expect(typeof newEmployee).toEqual('object');
  });
  })
})
