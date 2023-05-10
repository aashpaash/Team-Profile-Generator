// create employee constructor
const employee = require('./employee');

class manager extends employee {
    constructor(name, ID, email, officeNum){
        super(name, ID, email);
        this.officeNum = officeNum;
    }
    getOfficeNum(){
        return this.officeNum;
    }
    getRole() {
        return 'manager';
    }   
}

module.exports = manager;