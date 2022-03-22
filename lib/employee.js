const printInfo = function () {
for (var key in this) {
console.log(`${key}: ${this[key]}`);
}
};

// Employee Constructor
function Employee(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.office = office;
      this.title = title;
};

Employee.prototype.getName = function () {
  return this.name
};

Employee.prototype.getId = function () {
  return this.id
};

Employee.prototype.getEmail = function () {
  return this.email
};

Employee.prototype.getRole = function () {
  return 'Employee';
};

// const emp1 = new Employee('Devon', '6', 'devon@hi.com,', 'Manager');
// console.log(emp1);

module.exports = Employee;