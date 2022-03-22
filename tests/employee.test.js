// Instructor helped us set us this format for tests
const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const employee = new Employee('Tyrion', '1', 'hi@aol.com');
      expect('name' in employee).toBe(true);
      expect('id' in employee).toBe(true);
      expect('email' in employee).toBe(true);
    });
  });
  describe("getName", () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Tyrion', '1', 'hi@aol.com');
      expect(employee.getName()).toBe('Tyrion');
    });
  });
  describe("getId", () => {
    it('should return the id of the employee', () => {
      const employee = new Employee('Tyrion', '1', 'hi@aol.com');
      expect(employee.getId()).toBe('1');
    });
  });
  describe("getEmail", () => {
    it('should return the email of the intern', () => {
      const employee = new Employee('Tyrion', '1', 'hi@aol.com');
      expect(employee.getEmail()).toBe('hi@aol.com');
    });
  });
});
