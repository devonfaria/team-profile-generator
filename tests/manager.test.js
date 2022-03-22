const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const manager = new Manager('Randy', '1', 'r@email.com');
      expect('name' in manager).toBe(true);
      expect('id' in manager).toBe(true);
      expect('email' in manager).toBe(true);
    });
  });
  describe("getName", () => {
    it('should return the name of the manager', () => {
      const manager = new Manager('Randy', '1', 'r@email.com');
      expect(manager.getName()).toBe('Randy');
    });
  });
  describe("getId", () => {
    it('should return the id of the manager', () => {
      const manager = new Manager('Randy', '1', 'r@email.com');
      expect(manager.getId()).toBe('1');
    });
  });
  describe("getRole", () => {
    it('should return the role of the manager', () => {
      const manager = new Manager('Randy', '1', 'r@email.com');
      expect(manager.getRole()).toBe('Manager');
    });
  });
  describe("getEmail", () => {
    it('should return the email of the intern', () => {
      const manager = new Manager('Randy', '1', 'r@email.com');
      expect(manager.getEmail()).toBe('r@email.com');
    });
  });
});