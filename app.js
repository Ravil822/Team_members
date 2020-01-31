const fs = require("fs-extra");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


function addEmployee() {
    inquirer.prompt([
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
            type: "list",
            name: "role",
            message: "Please, select Employee position",
            choices: [
                "Engineer",
                "Manager",
                "Intern"
            ]
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
            addEngineer()
        } else if (answers.role === "Manager") {
            addManager()
        } else {
            addIntern()
        }
        function addEngineer() {
            console.log(answers.role)
        }

        function addManager() {
            console.log(answers.role)
        }
        function addIntern() {
            console.log(answers.role)
        }
        addEmployee()

    })

}


function startApp() {

    inquirer.prompt([
        {
            type: "input",
            name: "teamSize",
            message: "What is your team size?"
        },
    ]).then(answers => {
        for (let i = o; i < teamSize; i++) {
            addEmployee();
        }

    })
};
startApp();

function createHTML() {
    let teamHTML = `<!DOCTYPE html>
     <html>
     
     <head>
         <title>Page</title>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
         <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     </head>
     
     <body style="background-color: lightgray;">
     
         <div class="container-fluid" style="max-width: 75rem; padding: 30px; background-color: white;">
             <div class="jumbotron bg-danger text-white">
                 <h1 class="text-center">My Team</h1>
             </div>
             <div>
            //  Cards go here
             </div>
         </div>
     
     </body>
     
     </html>`;
};