const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('Making a Manager Object', () => {
  const manager = new Manager('Jim', 12345, 'jim@jim.com', 14) 

  expect(manager.name).toBe('Jim');
  expect(manager.id).toEqual(12345);
  expect(manager.email).toBe('jim@jim.com');
  expect(manager.officeNumber).toEqual(14);
})