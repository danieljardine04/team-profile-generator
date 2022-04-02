const Intern = require('../lib/Intern.js');

test('Creating an Intern Object', () => {
 const intern = new Intern('Susie', 54321, 'susie@susie.com', 'Lake George');

  expect(intern.name).toBe('Susie');
  expect(intern.id).toEqual(54321);
  expect(intern.email).toBe('susie@susie.com');
  expect(intern.school).toBe('Lake George');
});

// test('Checking the role of the Intern class', () => {
//   const intern = new Intern('Susie', 54321, 'susie@susie.com', 'Lake George');

//   expect(intern.getRole).toBe(Intern);
// })