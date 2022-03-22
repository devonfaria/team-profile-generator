const Employee = require ('../lib/employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
      super (name, id, email, 'Engineer')
      this.github = github;
  }

  getRole() {
      return 'Engineer';
  }
  getGithub () {
      return this.github
  }
};

module.exports = Engineer;