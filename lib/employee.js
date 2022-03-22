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
      this.title = 'Employee';
      this.getName = () => {
        return this.name
      };
      this.getId = () => {
        return this.id
      };
      this.getEmail = () => {
        return this.email
      };
      this.getRole = () => {
        return 'Employee';
      };
      console.log(Employee);
};

// const emp1 = new Employee('Devon', '6', 'devon@hi.com,', 'Manager');
// console.log(emp1);

module.exports = Employee;