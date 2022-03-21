// Linking required files and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
// const employeeTest = require('./tests/employee.test');
// const engineerTest = require('./tests/engineer.test');
// const internTest = require('./tests/intern.test');
// const managerTest = require('./tests/manager.test');

const questionsManager = [
  {
    type: 'input',
    message: "What is your manager's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the manager's GitHub user name?",
    name: 'username',
  },
  {
    type: 'input',
    message: "What is the manager's email?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the manager's office number?",
    name: 'username',
  },
  {
    type: 'input',
    message: "What is the manager's office ID?",
    name: 'username',
  },
];

// Function that creates an HTML file and adds it to the dist folder in the repository
function writeToFile(text) {
  fs.writeFile('./dist/index.html', text, (err) => {
    err ? console.error(err) : console.log('Success!')
  })
};


// Initializes the terminal questions
function promptManager() {
  inquirer
  .prompt(questionsManager)
    .then ((data) => {
      console.log(data);
      // may have to add this information to an array/object instead
      const htmlText = 'generateHTML function passing data';
      writeToFile(htmlText)
    })
    .catch((err) => {console.log(err)});
};

promptManager();
