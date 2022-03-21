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
    name: 'office-num',
  },
  {
    type: 'input',
    message: "What is the manager's office ID?",
    name: 'id',
  },
  {
    type: 'rawlist',
    message: 'Would you like to add another employee',
    name: 'type',
    choices: [
      {name: 'Engineer', value: 'engineer'},
      {name: 'Intern', value: 'intern'},
      {name: 'None', value: 'none'},
    ]
  },
];

const questionsIntern = [
  {
    type: 'input',
    message: "What is the intern's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the intern's school?",
    name: 'username',
  },
  {
    type: 'input',
    message: "What is the intern's email?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the intern's office ID?",
    name: 'id',
  },
];

const questionsEngineer = [
  {
    type: 'input',
    message: "What is the engineer's name?",
    name: 'name',
  },
  {
    type: 'input',
    message: "What is the engineer's Github username?",
    name: 'username',
  },
  {
    type: 'input',
    message: "What is the engineer's email?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the engineer's office ID?",
    name: 'id',
  },
];

// Function that creates an HTML file and adds it to the dist folder in the repository
function writeToFile(text) {
  fs.writeFile('./dist/index.html', text, (err) => {
    err ? console.error(err) : console.log('Success!')
  })
};

// FUNCTION ELEMENTS TO GENERATE TEXT FOR HTML
// const htmlText = 'generateHTML function passing data';
// writeToFile(htmlText);

// Initializes the terminal questions
function promptManager() {
  inquirer
  .prompt(questionsManager)
    .then ((data) => {
      console.log(data);
      switch (data.type) {
        case 'engineer': return console.log('engineer chosen');
        case 'intern': return console.log('intern chosen');
        case 'none': return console.log('none chosen');
      }
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

function promptEngineer() {
  inquirer
  .prompt(questionsEngineer)
    .then ((data) => {
      console.log(data);
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

function promptIntern() {
  inquirer
  .prompt(questionsIntern)
    .then ((data) => {
      console.log(data);
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

promptManager();
