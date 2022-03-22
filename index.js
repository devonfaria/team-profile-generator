// Linking required files and dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');

// QUESTIONS FOR TERMINAL PROMPTS
const questionsManager = [
  {
    type: 'input',
    message: "What is the manager's name?",
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
  message: 'Would you like to add another employee?',
  name: 'type',
  choices: [
    {name: 'Engineer', value: 'engineer'},
    {name: 'Intern', value: 'intern'},
    {name: 'No', value: 'none'},
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
const generateHTML = function (cards) {
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
    ${cards}
  </main>
</body>
</html>`
};

// GENERATES CARD FOR HTML PAGE
const generateCard = function (name, id, email, icon, office) {
  return `<div class="container-fluid row justify-content-center d-flex flex-wrap">
  <div class="card m-5 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-header">
      <h2>${name}</h2>
      <h3><i class="fa-solid fa-mug-hot">${icon} Manager</i></h3>
    </div>
    <div class="card-body">
      <p class="d-flex p-2 bd-highlight">${id}</p>
      <a href="mailto:${email}" class="card-link">${email}</a>
      <p class=""><span>${office}</span></p>
    </div>
  </div>`
};

const generateCard = function (name, id, email, icon, office) {
  return `<div class="container-fluid row justify-content-center d-flex flex-wrap">
  <div class="card m-5 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
    <div class="card-header">
      <h2>${name}</h2>
      <h3><i class="fa-solid fa-mug-hot">${icon} Manager</i></h3>
    </div>
    <div class="card-body">
      <p class="d-flex p-2 bd-highlight">${id}</p>
      <a href="mailto:${email}" class="card-link">${email}</a>
      <p class=""><span>${office}</span></p>
    </div>
  </div>`
};

// Initializes the terminal questions
function promptManager() {
  inquirer
  .prompt(questionsManager)
    .then ((data) => {
      const newManager = new Employee (data.name, data.id, '<i class="fa-solid fa-mug-hot"></i>', data.email);
      writeToFile(generateHTML(generateCard(data.name, data.id, data.email, data.office)));
      // addEmployee();
      // writeToFile(generateHTML());
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