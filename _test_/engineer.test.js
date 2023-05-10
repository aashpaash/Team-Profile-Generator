const engineer = require('./lib/engineer');
const employee = require ('.lib/employee');

const employee = new employee(name, id, email, github)


describe ( 'engineer',() => {
    describe('initialization',() => {
        it('should create an engineer object with an id, name, email, and GitHub'),() => {
           const name = 'EZ';
           const email = 'ex@email.com';
           const github = 'https://github.com/ez';
           const id = '456l';
        }
        expect(engineer.name).toEqual(name);
        expect(engineer.email).toEqual(email);
        expect(engineer.github).toEqual(github);
        expect(engineer.id).toEqual(id);
    });
//        it('should alert err if invalid info provided'() => {

 //       })
})