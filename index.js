// Linking required modules and dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Constructor functions for staff
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Empty arrays to collect entered staff member information
let employees = [];
let cards = '';

// Questions for terminal prompts, split by employee type
const questionsManager = [
  {
    type: 'input',
    message: "What is the manager's name?",
    name: 'name',
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
    message: "What is the manager's employee ID?",
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
    message: "What is the engineer's employee ID?",
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
    name: 'school',
  },
  {
    type: 'input',
    message: "What is the intern's email?",
    name: 'email',
  },
  {
    type: 'input',
    message: "What is the intern's employee ID?",
    name: 'id',
  },
];

// Asks if you would like to add another employee
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

// I want to have an array of employees that I can use a for each to create cards with. 
// Create an array of employee objects 
// 




// GENERATES BASE HTML PAGE
const generateHTML = function (cards) {
  let htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Team</title>
  <script src="https://kit.fontawesome.com/1f93c332b8.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="../src/style.css">
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    <div class="container-fluid row justify-content-center d-flex flex-wrap">
      ${cards}
    </div>
  </main>
</body>
</html>`;
  console.log(`HTML Body: ` + htmlBody);
  writeToFile(htmlBody)
};

// GENERATES CARD FOR HTML PAGE
// uses loop to create div card element for each staff member from employee array
const generateCards = function (employees) {
  console.log('Generate cards called');
  console.log(employees);
  // Empty variabes for the switch case determining staff type
  let otherInfo = '';
  let icon = '';
  // Loop using employee information to fill HTML
  for (let employee of employees) {
    let role = employee.getRole();
    console.log(role);
    if (role === 'Manager') {
      icon = '<i class="fa-solid fa-mug-hot"></i>';
      otherInfo = `Office number: ${employee.office}`;
    } else if (role === 'Engineer') {
      icon = '<i class="fa-solid fa-glasses"></i>';
      otherInfo = `<p class="d-flex bd-highlight">GitHub:&nbsp;<a href="https://github.com/${employee.username}" class="card-link" target="_blank"> ${employee.username}</a></p>`;
    } else if (role === 'Intern') {
      icon = '<i class="fa-solid fa-user-graduate"></i>';
      otherInfo = `<p class="">School: ${employee.school}</p>`;
    };

    // Template for div card elements
    let cardHTML = `  <div class="card m-5 shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
      <div class="card-header">
        <h2>${employee.name}</h2>
        <h3>${icon} ${role}</i></h3>
      </div>
      <div class="card-body">
        <p class="d-flex bd-highlight">ID: ${employee.id}</p>
        <p class="d-flex bd-highlight">Email:&nbsp;<a href="mailto:${employee.email}" class="card-link">${employee.email}</a></p>
        ${otherInfo}
      </div>
    </div>\n`;
    let newText = cards.concat(cardHTML);
    cards = newText;
    console.log(`Cards: ` + cards);
  };
  generateHTML(cards);
};

// Initializes the terminal questions for different staff types, and adds to employee array, and triggers prompt to add new employee
function promptManager() {
  inquirer
  .prompt(questionsManager)
    .then ((data) => {
      const newManager = new Manager (data.name, data.id, data.email, data.office);
      employees.push(newManager);
    }).then(()=>{addEmployee()})
    .catch((err) => {console.log(err)});
};

function promptEngineer() {
  inquirer
  .prompt(questionsEngineer)
    .then ((data) => {
      const newEngineer = new Engineer (data.name, data.id, data.email, data.username);
      employees.push(newEngineer);
    }).then(()=>{addEmployee()})
    .catch((err) => {console.log(err)});
};

function promptIntern() {
  inquirer
  .prompt(questionsIntern)
    .then ((data) => {
      const newIntern = new Intern (data.name, data.id, data.email, data.school);
      employees.push(newIntern);
    }).then(()=>{addEmployee()})
    .catch((err) => {console.log(err)});
};

function addEmployee() {
  inquirer
  .prompt(questionsAdd)
    .then ((data) => {
      switch (data.type) {
        case 'engineer': return promptEngineer();
        case 'intern': return promptIntern();
        case 'none': return generateCards(employees);
      };
    })
    .catch((err) => {console.log(err)});
};

// Initializes prompts
promptManager();

// `<a href="https://github.com/${employee.username}" class="card-link" target="_blank">Github: ${employee.username}</a>`;