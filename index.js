// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// Generate team page
const generateTeam = require('./utils/generateTeam');

// Team file imports
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');

// Team string
const team = {
  employee: [],
  manager: [],
  engineer: [],
  intern: [],
};

// Store manager database
function teamManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Name of manager:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Manager email address:',
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Manager office number:',
    },
    {
      type: 'input',
      name: 'Id',
      message: 'Id of manager:',
    },
  ]).then(manager => {
    team.manager = manager;
    addMember();
  });
}

function addMember() {
  inquirer.prompt([{
    type: 'list',
    message: 'Select role to add:',
    name: 'roles',
    choices: [
      'engineer',
      'intern',
      'n/a'
    ],
  }]).then(selection => {
    if (selection.roles === 'engineer') {
      addEngineer();
    } else if (selection.roles === 'intern') {
      addIntern();
    } else {
      generateTeam(team);
    }
  });
}

function addEngineer() {
  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Name of engineer:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'engineer email address:',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'engineer ID:',
    },

  ]).then(engineer => {
    team.engineer.push(engineer);
    addMember();
  });
}

function addIntern() {
  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'Name of intern:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Name of school:',
    },
    {
      type: 'input',
      name: 'ID',
      message: 'intern ID:',
    },

  ]).then(intern => {
    team.intern.push(intern);
    addMember();
  });
}

teamManager();
