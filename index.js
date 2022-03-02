const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

let team = [];

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of employee are you going to add to the team?',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'No others',
            ]
        }
    ]).then((userInput) => {
        switch(userInput.employeeType) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'No others':
                buildHTML();
        }
    });

}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s ID?',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
        }
        ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        createTeam();
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the enginner\'s ID?',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the enginner\'s github username?',
        }       
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s ID?',
        },
        {
            type: 'input',
            name: 'email', 
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?',
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        createTeam();
    });
}

function buildHTML() {
    fs.writeFileSync('index.html', generateHTML(team));
    console.log(`You have successfully create Team Profile`);
}

createTeam();