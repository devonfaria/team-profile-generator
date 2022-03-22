// const printInfo = function () {
// for (var key in this) {
// console.log(`${key}: ${this[key]}`);
// }
// };

// Employee Constructor
class Employee {
  constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
  }
      getName() {
        return this.name
      };
      getId() {
        return this.id
      };
      getEmail() {
        return this.email
      };
      getRole() {
        return 'Employee';
      };
};

module.exports = Employee;