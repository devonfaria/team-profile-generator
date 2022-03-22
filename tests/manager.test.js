const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("init", () => {
    it('should require an office number', () => {
      const manager = new Manager('Arya Stark', '4', 'facelessbutnotbaseless@outlook.com', '999');
      expect('office' in manager).toBe(true);
    });
  });
  describe("getOfficeNumber", () => {
    it('should return the office number of the manager', () => {
      const manager = new Manager('Arya Stark', '4', 'facelessbutnotbaseless@outlook.com', '999');
      expect(manager.getOfficeNumber()).toBe('999');
    });
  });
  describe("getRole", () => {
    it('should return the role as employee', () => {
      const manager = new Manager('Arya Stark', '4', 'facelessbutnotbaseless@outlook.com', '999');
      expect(manager.getRole()).toBe('Manager');
    });
  });
});