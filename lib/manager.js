const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    printOfficeNumber() {
        return this.officeNumber;
    }

    printRole() {
        return "Manager"
    }
    generateHTML() {
        return `
    <div class="card shadow-lg mb-2 bg-white rounded" style="max-width: 18rem; min-width: 18rem;">
        <div class="card-header text-white bg-primary">
            <h3>${this.name}</h3>
            <h4><i class="fas fa-smoking" style="margin-right: 5px;"></i>Manager</h4>
        </div>
        <div class="card-body" style="background-color: lightgray;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4 class="fas fa-id-badge fa-lg white-text mr-md- mr- fa-1x">ID: ${this.id}<i></i></h4></li>
                    <li class="list-group-item"><h4 class="fas fa-at fa-lg white-text mr-md- mr- fa-1x">Email: <a class="nav-link" href="${this.email}"><i>${this.email}</i></a></h4></li>
                    <li class="list-group-item"><h4 class="fas fa-phone-square-alt fa-lg white-text mr-md- mr- fa-1x">Office Number: ${this.officeNumber}<a href="#"><i></i></a></h4></li>
                </ul>
        </div>
     </div>
        `
    }


}

module.exports = Manager;
