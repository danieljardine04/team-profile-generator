const inquirer = require('inquirer');



 var getName = await function(){ 
  return inquirer.prompt({
  type: 'input',
  name: 'manager',
  message: 'What is the name of your team manager?' 
});
}
var name =  getName()
console.log("The name you entered is " + name);

