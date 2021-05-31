const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');

const generateHTML= require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamArray = []; 

const addManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the managers Name?"
            },
            {
                type: "input",
                name: "Id",
                message: "Please enter manager's ID"
            },
            {
                type: "input",
                name: "Email",
                message: "Please provide the manager's email"
            },
            {
                type: "input",
                name: "officeNo",
                message: "Please enter the manager's office number"
            },
        ])
            .then((data) => {
                manager = new Manager(data.Name, data.Id, data.Email, data.officeNo);
                teamArray.push(manager);
        }) 
    };

const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is the employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "Enter the name of the employee", 
            },
            {
                type: "input",
                name: "id",
                message: "Please provide employee's ID"
            },
            {
                type: "input",
                name: "email",
                message: "Please provide the emplyee's email"
            },
            {
                type: "input",
                name: "github",
                message: "Please provide emplyee's GitHub username"
            },
            {
                type: "input",
                name: "school",
                message: "What is the name of the employee's school"
            },
            {
                type: "confirm",
                name: "confirmAdd",
                message: "Add more team members",
                default: false
            },
        ])
            .then((data) => {
                let { name, id, email, role, github, school, confirmAdd } = data; 
                let employee; 

                if (role === "Engineer") {
                    employee = new Engineer (name, id, email, github);
                    console.log(employee);
              } else if (role === "Intern") {
                    employee = new Intern (name, id, email, school);
                    console.log(employee);
                }

                teamArray.push(employee);

                if (confirmAdd) {
                    return addEmployee(teamArray); 
                } else {
                    return teamArray;
                }
            }) 
    };    

    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            console.log(err);
        });
    }
    addManager()
        .then(addEmployee)
        .then(teamArray => {
        return generateHTML(teamArray);
     })
        .then(pageHTML => {
        return writeFile(pageHTML);
     });
  