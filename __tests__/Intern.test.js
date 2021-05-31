const Intern = require('../lib/Intern');

// sets up the Intern object//
test('creates an Intern object', () => {
    const intern = new Intern('Greg', 6148880, 'Gregmmetcalf@gmail.com', 'UOU');

    expect(intern.school).toEqual(expect.any(String));
});

// gets name of school from getSchool() //
test('gets Intern school name', () => {
    const intern = new Intern('Greg', 6148880, 'Gregmmetcalf@gmail.com', 'UOU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// sets Employee role as Intern// 
test('set role of Employee to Intern', () => {
    const intern = new Intern('Greg', 6148880, 'Gregmmetcalf@gmail.com', 'UOU');

    expect(intern.getRole()).toEqual("Intern");
});