const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email);
  
    this.school = school

  }
static promptIntern(inquirer){
 return super.promptEmployee('Intern', inquirer,  {
  type: 'input',
  name: 'school',
  message: "What school does this intern go to?"
}).then(answers => new Intern(answers.name, answers.id, answers.email, answers.school))

}
  getSchool(){
    return `${this.school}`
  }


}
module.exports = Intern;