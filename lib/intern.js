const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    printSchool() {
        return this.school;
    }

    printRole() {
        return "Intern"
    }
    generateHTML() {
        return `
    <div class="card shadow-lg mb-2 bg-white rounded" style="max-width: 18rem; min-width: 18rem;">
        <div class="card-header text-white bg-primary">
        <h3>${this.name}</h3>
        <h4><i class="fas fa-user-graduate" style="margin-right: 5px;"></i>Intern</h4>
        </div>
        <div class="card-body" style="background-color: lightgray;">
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><h4 class="fas fa-id-badge fa-lg white-text mr-md- mr- fa-1x">ID: ${this.id}<i></i></h4></li>
                <li class="list-group-item"><h4 class="fas fa-at fa-lg white-text mr-md- mr- fa-1x">Email: <a class="nav-link" href="${this.email}"><i>${this.email}</i></a></h4></li>
                    <li class="list-group-item"><h4 class="fas fa-university fa-lg white-text mr-md- mr- fa-1x">School: ${this.school}<a href="#"><i></i></a></h4></li>
                </ul>
        </div>
    </div>
        `
    }


}

module.exports = Intern;