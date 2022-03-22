const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const intern = new Intern('Oberin Sand', '3', 'ihaveaheadache@msn.com', 'School of Hard Knocks');
      expect('name' in intern).toBe(true);
      expect('id' in intern).toBe(true);
      expect('email' in intern).toBe(true);
    });
  });
  describe("getSchool", () => {
    it('should return the school of the intern', () => {
      const intern = new Intern('Oberin Sand', '3', 'ihaveaheadache@msn.com', 'School of Hard Knocks');
      expect(intern.getSchool()).toBe('School of Hard Knocks');
    });
  });
});