const { template } = require("lodash");

// Manager Card
const generateManager = (manager) => {
    return`
    <div class="card employee-card justify-content-around">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h4 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Ofiice Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>   
    `
};

// Engineer Card
const generateEngineer = (engineer) => {
    return`
    <div class="card employee-card justify-content-around">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h4 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>   
    `
};

// Intern Card
const generateIntern = (intern) => {
    return`
    <div class="card employee-card justify-content-around">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h4 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">        
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>   
    `
};   




function generateTeam(team) {
    const teamList = [];
    for (let i = 0; i < team.length; i++) {
        const employee = team[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamList.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamList.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamList.push(internCard);
        }
    }

    const html = teamList.join('');
    return generateHTML(html);
}


const generateHTML = (html) => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta ticard-title="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/5b854ce19f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron p-0 container-fluid">
        <h1 class="text-white text-center p-5">My Team</h1>
    </header>

    <div class="container">
        <div class="row">
        ${html}
        </div>
    </div>
</body>
</html>
    `
};



module.exports = generateTeam;