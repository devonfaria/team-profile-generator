const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const engineer = new Engineer('Rob Stark', '2', 'housestark@aol.com', 'redwedding');
      expect('username' in engineer).toBe(true);
    });
  });
  describe("getGithub", () => {
    it('should return the GitHub username of the engineer', () => {
      const engineer = new Engineer('Rob Stark', '2', 'housestark@aol.com', 'redwedding');
      expect(engineer.getGithub()).toBe('redwedding');
    });
  });
  describe("getRole", () => {
    it('should return the role as engineer', () => {
      const engineer = new Engineer('Oberin Sand', '3', 'ihaveaheadache@msn.com', 'School of Hard Knocks');
      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});