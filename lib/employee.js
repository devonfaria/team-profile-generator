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
function Employee(name, id, email, title) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.title = title;
};
 


module.exports = Employee;