const Engineer = require('../lib/Engineer');

// sets up the Engineer object//
test('creates an Engineer object', () => {
    const engineer = new Engineer('greg', 8569632, 'gregmmetcalf@gmail.com', 'natcalderon');

    expect(engineer.github).toEqual(expect.any(String));
});

// gets GitHub username from getGitHub() //
test('sets engineer github username', () => {
    const engineer = new Engineer('greg', 8569632, 'gregmmetcalf@gmail.com', 'natcalderon');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// sets Employee role as Engineer// 
test('set role of employee to engineer', () => {
    const engineer = new Engineer('greg', 8569632, 'gregmmetcalf@gmail.com', 'natcalderon');

    expect(engineer.getRole()).toEqual("Engineer");
});