const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHub){
    super(name, id, email);
  
    this.gitHub = gitHub

  }
static promptEngineer(inquirer){
 return super.promptEmployee('Engineer', inquirer, {
    type: 'input',
    name: 'gitHub',
    message: "What is the username of this engineer's github?"
}).then(answers => new Engineer(answers.name, answers.id, answers.email, answers.gitHub))
}
 getGitHub(){
   return `${this.gitHub}`
 }

}

module.exports = Engineer;