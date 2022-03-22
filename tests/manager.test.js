const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("init", () => {
    it('should require an office number', () => {
      const manager = new Manager('Randy', '1', 'r@email.com', '12324');
    
      expect('email' in manager).toBe(true);
    });
  });
  
});