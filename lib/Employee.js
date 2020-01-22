class Employee {
    constructor(name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
    }
  
    printName() {
        return this.name;  
    }
    printId() {
        return this.id;  
    }
    printEmail() {
        return this.email;  
    }
    printRole() {
        return 'Employee';  
    }
    
}
  
  module.exports = Employee;
  