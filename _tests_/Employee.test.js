const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');



test('creates an Employee object', () => {
  const employee = new Employee('Dave', 68, 'Dave@Dave.com');
  
  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('Dave@Dave.com');
  

})