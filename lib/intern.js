// create intern constructor
const employee = require('./employee');

class intern extends employee {
    constructor(name,Id, email, school) {
        super(name,Id, email);
        this.school = school;
    }
    getSchool() { return this.school; }
    getRole() { return 'Intern'; }
}

module.exports = intern;