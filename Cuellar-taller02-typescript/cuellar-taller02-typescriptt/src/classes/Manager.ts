import { BaseEmploye } from "./BaseEmployee";
import type { User } from "../interfaces/interface.ts";
import type { Department } from "../interfaces/types.ts";

export class Manager extends BaseEmploye {
     private teamSize: number;

     constructor(user: User, id: number, department: Department, teamSize: number) {
        super(user, id, department);
        this.teamSize = teamSize;
       // TODO: Implementar
         }


     getDetails(): string {
        return `${this.name} (${this.email}) - ID: ${this.id}, Edad: ${this.age}, Departamento: ${this.department} (Manager), Tamaño del equipo: ${this.teamSize}`;
       // TODO: Retornar información del manager
     }

     calculateSalary(): number {
        return 4000 + (this.teamSize *300);
       // TODO: Salario base 4000 + 300 por cada miembro del equipo
     }
    }
const user: User = {id: 34, name: "Ana Gómez", age: 40, email: "angomez@gmail.com", gender: "Femenino" };
const manager = new Manager(user, 20, "HR", 5);
console.log("Manager:");
console.log(manager.getDetails());
console.log("Salary:", manager.calculateSalary());