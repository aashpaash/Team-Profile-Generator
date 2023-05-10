const manager = require ('.lib/manager');

const manager = new manager(name, id, email, officeNum);


describe ( 'manager',() => {
    describe('initialization',() => {
        it('should create an object with an id, name, email, and GitHub'),() => {
           const name = 'GQ';
           const email = 'ex@email.com';
           const officeNum = '7';
           const id = '456p';
        }
        expect(manager.name).toEqual(name);
        expect(manager.email).toEqual(email);
        expect(manager.officeNum).toEqual(officeNum);
        expect(manager.id).toEqual(id);

    });

})