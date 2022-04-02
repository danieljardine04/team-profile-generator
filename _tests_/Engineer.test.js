const Engineer = require('../lib/Engineer');

test('Making an Engineer Object', () => {
  const engineer = new Engineer('Mike', 23456, 'mike@mike.com', 'mike.github.com' );

  expect(engineer.name).toBe('Mike');
  expect(engineer.id).toEqual(23456);
  expect(engineer.email).toBe('mike@mike.com');
  expect(engineer.gitHub).toBe('mike.github.com');
})