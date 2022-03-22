// Linking required files and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = [];
const Engineer = [];
const Intern = [];

// QUESTIONS FOR TERMINAL PROMPTS
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
    name: 'office',
  },
  {
    type: 'input',
    message: "What is the manager's office ID?",
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

const questionsAdd = [
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

// Function that creates an HTML file and adds it to the dist folder in the repository
function writeToFile(text) {
  fs.writeFile('./dist/index.html', text, (err) => {
    err ? console.error(err) : console.log('Success!')
  })
};

// GENERATES BASE HTML PAGE
const generateHTML = function () {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./src/style.css">
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
  </main>
</body>
</html>`
};

// GENERATES CARD FOR HTML PAGE
const generateCard = function (data) {
  return `<div>
  <div>
    <h2>${data.name}</h2>
    <h3>${data.title}</h3>
  </div>
  <div>
    <p>${data.id}</p>
    <p><span>${data.email}</span></p>
    <p><span>${data.office}</span></p>
  </div>
</div>`
};

// Initializes the terminal questions
function promptManager() {
  inquirer
  .prompt(questionsManager)
    .then ((data) => {
      console.log(data);
      addEmployee();
      writeToFile(generateHTML());
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

function promptEngineer() {
  inquirer
  .prompt(questionsEngineer)
    .then ((data) => {
      console.log(data);
      addEmployee();
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

function promptIntern() {
  inquirer
  .prompt(questionsIntern)
    .then ((data) => {
      console.log(data);
      addEmployee();
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

function addEmployee() {
  inquirer
  .prompt(questionsAdd)
    .then ((data) => {
      switch (data.type) {
        case 'engineer': return promptEngineer();
        case 'intern': return promptIntern();
        case 'none': return console.log('none chosen');
      };
      // may have to add this information to an array/object instead
    })
    .catch((err) => {console.log(err)});
};

// Initializes prompts
promptManager();

// const employeeTest = require('./tests/employee.test');
// const engineerTest = require('./tests/engineer.test');
// const internTest = require('./tests/intern.test');
// const managerTest = require('./tests/manager.test');