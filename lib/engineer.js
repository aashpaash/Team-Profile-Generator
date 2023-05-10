const employee = require('./employee');

class engineer extends employee {
    constructor(name, email, github, id){
        super(name, email, id)
        this.github = github;
    }
    getGithub() { return this.github; }
    getRole() { return 'engineer'; }
}

module.exports = engineer;