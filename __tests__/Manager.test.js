const Manager = require('../lib/Manager');

// sets up the Manager object//
test('creates a Manager object', () => {
    const manager = new Manager('Nathaly', 458, 'Nathaly@manager.com', 25);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// sets Employee role as Manager// 
test('set role of employee to manager', () => {
    const manager = new Manager('Nathaly', 4258, 'Nathaly.@manager.com', 5);

    expect(manager.getRole()).toEqual("Manager");
});