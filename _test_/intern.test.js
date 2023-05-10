const intern = require ('.lib/intern');

const intern = new intern(name, id, email, school);


describe ( 'intern',() => {
    describe('initialization',() => {
        it('should create an object with an id, name, email, and school'),() => {
           const name = 'DC';
           const email = 'ex@email.com';
           const github = 'https://github.com/DC';
           const id = '456o';
           const school = 'UofO'
        }
        expect(intern.name).toEqual(name);
        expect(intern.email).toEqual(email);
        expect(intern.github).toEqual(github);
        expect(intern.id).toEqual(id);

    });

})