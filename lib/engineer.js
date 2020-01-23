const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    printGithub() {
        return this.github
    }
    printRole() {
        return "Engineer"
    }

    generateHTML() {
        return `
    <div class="card shadow-lg mb-2 bg-white rounded" style="max-width: 18rem; min-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3>${this.name}</h3>
            <h4><i class="fas fa-glasses" style="margin-right: 5px;"></i>Engineer</h4>
        </div>
        <div class="card-body" style="background-color: lightgray;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4 class="fas fa-id-badge fa-lg white-text mr-md- mr- fa-1x">ID: ${this.id}</h4></li>
                    <li class="list-group-item"><h4 class="fas fa-at fa-lg white-text mr-md- mr- fa-1x">Email: <a class="nav-link" href="${this.email}"><i>${this.email}</i></a></h4></li>
                    <li class="list-group-item"><h4 class="fab fa-github fa-lg white-text mr-md- mr- fa-1x">GitHub: ${this.github}<a class="nav-link" href="#"><i></i></a></h4></li>
                </ul>
        </div>
    </div>
        `
    }
}
module.exports = Engineer;