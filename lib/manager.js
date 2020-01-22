const employee = require("./Employee");

class engineer extends employee {
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
    genaretaHTML() {
        return `
    <div class="card" style="max-width: 18rem; min-width: 18rem;">
        <div class="card-header text-white bg-primary mb-3">
            <h3>Name</h3>
            <h4><i class="fas fa-glasses" style="margin-right: 5px;"></i>Engineer</h4>
        </div>
        <div class="card-body" style="background-color: lightgray;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h4 class="fas fa-id-badge fa-lg white-text mr-md- mr- fa-1x">ID: <i></i></h4></li>
                    <li class="list-group-item"><h4 class="fas fa-at fa-lg white-text mr-md- mr- fa-1x">Email: <a class="nav-link" href="#"><i></i></a></h4></li>
                    <li class="list-group-item"><h4 class="fab fa-github fa-lg white-text mr-md- mr- fa-1x">GitHub: <a class="nav-link" href="#"><i></i></a></h4></li>
                </ul>
        </div>
    </div>
        `
    }


}