const fs = require("fs-extra");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const employees = [];
let targetSize;


function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please, select Employee position",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "name",
            message: "Please, enter a Employee Name"
        },
        {
            type: "input",
            name: "id",
            message: "Please, enter a Employee Identification number"
        },
        {
            type: "input",
            name: "email",
            message: "Please, enter a Employee email address",
        },
        {
            type: "input",
            name: "gitUser",
            message: "Please, enter a Employee Github username",
            when: ({ role }) => role === "Engineer"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please, enter a Employee Office Number",
            when: ({ role }) => role === "Manager"
        },
        {
            type: "input",
            name: "school",
            message: "Please, enter a Education Institute of Intern",
            when: ({ role }) => role === "Intern"
        }
    ]).then(answers => {
        if (answers.role === "Engineer") {
            employees.push( new Engineer(answers.name, answers.id, answers.email, answers.gitUser))
        } else if (answers.role === "Manager") {
            employees.push( new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        } else {
            employees.push( new Intern(answers.name, answers.id, answers.email, answers.school))
        }

        if (employees.length < targetSize) {
            addEmployee()
        } else {
            createHTML()
        }
    })
}


// function startApp() {

    inquirer.prompt([
        {
            type: "number",
            name: "teamSize",
            message: "What is your team size?"
        },
    ]).then(answers => {
            targetSize = answers.teamSize;
            addEmployee();
    })
// };
// startApp();

function createHTML() {
    var engineerCards = employees.filter(employee => employee.printRole() === "Engineer").map(engineer => engineer.generateHTML())
    var managerCards = employees.filter(employee => employee.printRole() === "Manager").map(engineer => engineer.generateHTML()) 
    var internCards = employees.filter(employee => employee.printRole() === "Intern").map(engineer => engineer.generateHTML())
    console.log(employees)

    let teamHTML = `<!DOCTYPE html>
     <html>
     
     <head>
         <title>Page</title>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
         <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
     <script src="https://kit.fontawesome.com/a076d05399.js"></script>
     </head>
     
     <body style="background-color: lightgray;">
     
         <div class="container-fluid" style="max-width: 75rem; padding: 30px; background-color: white;">
             <div class="jumbotron bg-danger text-white">
                 <h1 class="text-center">My Team</h1>
             </div>
            <div class="container card-deck justify-content-center">
            ${managerCards}
            ${engineerCards}
            ${internCards}
            </div>
        </div>
     
     </body>
     
     </html>`;
     employees.forEach(employee => teamHTML);
    //  console.log(teamHTML)
     fs.writeFile("./lib/output/myteam.html", teamHTML, function(err) {
        if (err) {
           return console.log(err);
        }
        console.log("myteam.html was created!")
     });
};