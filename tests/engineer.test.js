const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const engineer = new Engineer('Randy', '1', 'r@email.com');
      expect('name' in engineer).toBe(true);
      expect('id' in engineer).toBe(true);
      expect('email' in engineer).toBe(true);
    });
  });
  describe("getName", () => {
    it('should return the name of the engineer', () => {
      const engineer = new Engineer('Randy', '1', 'r@email.com');
      expect(engineer.getName()).toBe('Randy');
    });
  });
  describe("getId", () => {
    it('should return the id of the engineer', () => {
      const engineer = new Engineer('Randy', '1', 'r@email.com');
      expect(engineer.getId()).toBe('1');
    });
  });
  describe("getRole", () => {
    it('should return the role of the engineer', () => {
      const engineer = new Engineer('Randy', '1', 'r@email.com');
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
  describe("getEmail", () => {
    it('should return the email of the intern', () => {
      const engineer = new Engineer('Randy', '1', 'r@email.com');
      expect(engineer.getEmail()).toBe('r@email.com');
    });
  });
});