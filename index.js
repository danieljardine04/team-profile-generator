//const Team = require('./lib/Team');

//new Team().initializeTeam();


const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

const nextEmployee = 
    {
        type: 'checkbox',
        name: 'choice',
        message: "What type of team member would you like to add?",
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        validate: choiceInput =>{
            if(choiceInput.length !== 1){
                console.log('You must choose ONLY one option');
                return false;
            }else{
                return true; 
            }
        }
    }


var employees = [];

function makeNewEmployee(type){
    if(type === "I don't want to add any more team members"){
        var employeeHTML = ""
            for(let employee of employees){
                employeeHTML += employee.toHTML();
            }
        var HTML = `
        <DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset='UTF-8' />
            <link rel="stylesheet" href="./style.css"/>
            <title>Employee List</title>

        </head>

        <body>
            <header>
            </header>
            <div class="content">
                ${employeeHTML}
            </div>

        </body>
        </html>
        `
        console.log(HTML);
        fs.writeFile('./dist/index.html', HTML, (err) => {
            console.log(err)
          })
        }

     if(type === 'Engineer'){
          Engineer.promptEngineer(inquirer)
          .then(engineer => employees.push(engineer))
          .then(nextEmployeePrompt)
        } 
     if(type === 'Intern') {
      Intern.promptIntern(inquirer)
      .then(intern => employees.push(intern))
      .then(nextEmployeePrompt)
            
        }
        
    }


function nextEmployeePrompt(){
  inquirer.prompt(nextEmployee).then(answer => makeNewEmployee(answer.choice[0]));
}


function init(){
    Manager.promptManager(inquirer)
      .then(manager => employees.push(manager))
      .then(nextEmployeePrompt)
      
}

init()