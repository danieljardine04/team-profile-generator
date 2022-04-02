const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email; 
    }

    static promptEmployee(worker, inquirer, question){
        return inquirer.prompt([
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
            question
        ])
    }

    getName() {
        return `${this.name}`
    }

    getId() {
        return `${this.id}`
    }

    getEmail() {
        return `${this.email}`
    }

    getRole(){
        return this.constructor.name;
    }
    
    toHTML(){
        var items = "<ul class='items'>";
        for(var attr in this){
            items += `<li>${attr}: ${this[attr]}</li>`
        }
        items += "</ul>"
        const card = `
        <div class="card">
            <div>
                <h2>${this.name}<h2>
                <h3>${this.getRole()}<h3>
            </div>
            ${items}
        
        </div>    
        
        `
        return card;
    }
}

module.exports = Employee;