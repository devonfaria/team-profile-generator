const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const engineer = new Engineer('Rob Stark', '2', 'housestark@aol.com', 'redwedding');
      expect('name' in engineer).toBe(true);
      expect('id' in engineer).toBe(true);
      expect('email' in engineer).toBe(true);
    });
  });
  describe("getGithub", () => {
    it('should return the GitHub username of the engineer', () => {
      const engineer = new Engineer('Rob Stark', '2', 'housestark@aol.com', 'redwedding');
      expect(engineer.getGithub()).toBe('redwedding');
    });
  });
});