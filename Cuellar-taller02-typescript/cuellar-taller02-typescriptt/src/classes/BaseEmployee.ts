import type { User } from "../interfaces/interface.ts";
import type { Department } from "../interfaces/types.ts";


  export abstract class BaseEmploye {
     public id: number;
     public name: string;
     public age: number;
     public email: string;
     public gender: string;
     public department: Department;

     constructor(user: User, id: number, department: Department) {
       // TODO: Implementar constructor
            this.id = id;
            this.name = user.name;
            this.age = user.age;
            this.email = user.email;
            this.gender = user.gender;
            this.department = department;
     }


     abstract getDetails(): string;

     abstract calculateSalary(): number;
}

export class Developer extends BaseEmploye {
  constructor(user: User, id: number, department: Department) {
    super(user, id, department);
  }

  getDetails(): string {
    return `${this.name} (${this.email}) - ID: ${this.id}, Edad: ${this.age}, Departamento: ${this.department} (Desarrollador)`;
  }

  calculateSalary(): number {
    return 4500 + 500;
  }
}

const user: User = { id: 30, name: "Juan Pérez", age: 28, email: "juanp@mgmail.com", gender: "Masculino" };
const developer = new Developer(user, 12, "IT");  
console.log("BaseEmployee:")
console.log(developer.getDetails());  
console.log("Salario:", developer.calculateSalary());  
   