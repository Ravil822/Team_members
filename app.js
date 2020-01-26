const fs = require("fs-extra");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee")
const Engineer = require(".lib/Engineer")
const Intern = require(".lib/Intern")
const Manager = require(".lib/Manager")


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
      
  });