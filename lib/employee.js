const getName = function () {
  return this.name
};

const getId = function () {
  return this.id
};

const getEmail = function () {
  return this.email
};

const getRole = function () {
  return 'Employee';
};

const printInfo = function () {
for (var key in this) {
console.log(`${key}: ${this[key]}`);
}
};

// Employee Constructor
function Employee(name, username, email, office, id, title) {
      this.name = name;
      this.username = username;
      this.email = email;
      this.office = office;
      this.id = id;
      this.title = title;
};
 
// const emp1 = new Employee('Devon', '6', 'devon@hi.com,', 'Manager');
// console.log(emp1);

module.exports = Employee;