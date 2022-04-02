const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
  
    this.officeNumber = officeNumber

  }
static promptManager(inquirer){
 return super.promptEmployee('Manager', inquirer,  {
  type: 'input',
  name: 'managerOffice',
  message: "What is the team manager's office number?"
}).then(answers => new Manager(answers.name, answers.id, answers.email, answers.managerOffice))
}

  getOfficeNumber(){
    return `${this.officeNumber}`
  }

}

module.exports = Manager;