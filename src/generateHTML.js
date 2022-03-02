const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

const generateManager = (manager) => {
    return`
    <div class="card employee-card justify-content-around m-5">
        <div class="card-header">
            <h2>${manager.getName()}</h2>
            <h4>${manager.getRole()}</h4>
        </div>
        <div class="card-body">
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Ofiice Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>   
    `
}

const generateEngineer = (engineer) => {
    return`
    <div class="card employee-card justify-content-around m-5">
        <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <h4>${engineer.getRole()}</h4>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>Github: ${engineer.getGithub()}</p>
        </div>
    </div>   
    `
}

const generateIntern = (intern) => {
    return`
    <div class="card employee-card justify-content-around m-5">
        <div class="card-header">
            <h2>${intern.getName()}</h2>
            <h4>${intern.getRole()}</h4>
        </div>
        <div class="card-body">
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    </div>   
    `
}


function generateTeam(team) {
    const cards = [];
    for (let i = 0; i < cards.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cards.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cards.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cards.push(internCard);
        }
    }
    const html = cards.join('');
    const generateTeam = generateHTML(html);
    generateTeam();
}


const generateHTML = (html) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="jumbotron p-0 container-fluid">
        <h1 class="text-white bg-dark text-center p-5">My Team</h1>
    </header>

    <div class="container">
        <div class="row">
        </div>
        ${html}
    </div>
</body>
</html>
    `
};



module.exports = generateHTML;