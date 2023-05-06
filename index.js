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
    employee:[],
    manager: [],
    engineer:[],
    intern: [],

}

// Import jest for resting
const jest = require('jest');

// Store manager database
function teamManager() {
    inquirer.propmt([
        {
            type: 'input',
            name: 'name',
            message: 'Name of manager:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager email address:'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Manger office number:',
        },
        {
            type: 'input',
            name:'Id',
            message: 'Id of manager:',
        }
    ]).then(manager => {
        team.manager = manager;
    });
    addMember();
}

function addMember() {
    inquirer.prompt([{
        type: 'list',
        message: 'Select role to add:',
        name: 'roles',
        choices: [
            "engineer",
            "intern",
            "n/a"
        ]
    }
]).then(selection =>{
    if (selection.role === 'engineer'){
        addEngineer();
    } if (selection.role === 'inrern'){
        addIntern();
    } else generateTeam(team)
})
}

function addEnginier(){
    inquirer.propmpt([{
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
    
    ]).then(enginieer => {
        team.engineer.push(engineer);
        addMember();
    })
}

function addIntern(){
    inquirer.propmpt([{
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
        message: 'engineer ID:',
    },
    
    ]).then(intern => {
        team.intern.push(engineer);
        addMember();
    })
}

addMember();