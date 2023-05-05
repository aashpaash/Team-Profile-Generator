const employee = require ('.lib/employee');

const employee = new employee(name, id, email, github)


describe ( 'employee',() => {
    describe('initialization',() => {
        it('should create an object with an id, name, email, and GitHub'),() => {
           const name = 'LO';
           const email = 'ex@email.com';
           const github = 'https://github.com/LO';
           const id = '456e';
        }
        expect(employee.name).toEqual(name);
        expect(employee.email).toEqual(email);
        expect(employee.github).toEqual(github);
        expect(employee.id).toEqual(id);

    });

})