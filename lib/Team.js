const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const fs = require('fs');



function Team(){
  this.manager;
  this.engineer;
  this.intern;
  this.teamMembers = []
}

Team.prototype.teamMember = function(worker){
  
  const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the " + worker + "'s name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the " + worker + "'s Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the " + worker + "'s email?"
    },
  ]
  return questions;
}


  Team.prototype.initializeTeam = function(){
    this.createManager();
    
  }

  Team.prototype.createManager = function(){
    worker = "team manager";

    inquirer.prompt(this.teamMember(worker)).then(answers => {
      const officeNumber = this.promptHandler(worker)
      this.manager = new Manager(answers.name, answers.id, answers.email, officeNumber);
      this.teamMembers.push(this.manager);   
      // I need some way to have officeNumber also included in this write to file method
      this.writeToFile('../src/page-template.js', answers, officeNumber);
    });
    this.nextEmployee();
  }

  Team.prototype.createEngineer = function(){
    worker = 'Engineer';
  
    inquirer.prompt(this.teamMember(worker)).then(answers => {
      const engineerGitHub = this.promptHandler(worker);
      this.engineer = new Engineer(answers.name, answers.id, answers.email, engineerGitHub);
      this.teamMembers.push(this.engineer);
      this.writeToFile('../src/page-template.js', answers, engineerGitHub);
  })
    this.nextEmployee();
  }

  Team.prototype.createIntern = function(){
    worker = 'Intern'
    
    inquirer.prompt(this.teamMember(worker)).then(answers => {
      const internSchool = await this.promptHandler(worker);
      this.intern = new Intern(answers.manager, answers.managerId, answers.managerEmail, internSchool);
      this.teamMembers.push(this.intern);
      this.writeToFile('../src/page-template.js', answers, internSchool);

    })
    this.nextEmployee();
  }

  Team.prototype.nextEmployee = function(){
    inquirer.prompt({
      type: 'checkbox',
      name: 'nextEmployee',
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
  }).then(({nextEmployee}) => {
    if(nextEmployee === "I don't want to add any more team members"){

    // End the application and write to your index HTML
      console.log(employees);
  }
  if(nextEmployee === 'Engineer'){
      this.createEngineer;
  } 
  if(nextEmployee === 'Intern') {
     this.createIntern;
  }
  
}
  )
}


Team.prototype.promptHandler = function(employeeType){
  if(employeeType === 'team manager'){
   return await inquirer.prompt({
      type: 'input',
      name: 'managerOffice',
      message: "What is the team manager's office number?"
  })
  }
  if(employeeType === 'Engineer'){
   inquirer.prompt({
      type: 'input',
      name: 'engineerGitHub',
      message: "What is the username of this engineer's github?"
  }).then(({answers}) => {
     answers.engineerGitHub;
  })
  }
  if(employeeType === 'Intern'){
    inquirer.prompt({
      type: 'input',
      name: 'school',
      message: "What school does this intern go to?"
  }).then(({answers}) => {
     answers.school;
  })
  }
}

Team.prototype.writeToFile = function(fileName, answers, type){
  fs.writeFile(fileName, generateMarkdown(answers, type), (err) => {
    if(err){
      console.log(err);
    } else{
      console.log('File written successfully');
    }
  })
}

module.exports = Team;