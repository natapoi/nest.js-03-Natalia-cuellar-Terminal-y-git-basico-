import { BaseEmploye } from "./BaseEmployee"; 
import type { User } from "../interfaces/interface.ts";

export class Developer extends BaseEmploye {
    
    private programmingLanguages: string[];

     constructor(user: User, id: number, languages: string[]) {
        super(user, id, "IT");
        this.programmingLanguages = languages;  
       // TODO: Implementar - siempre será del departamento IT
     }

     getDetails(): string {
         return `${this.name} (${this.email}) - ID: ${this.id}, Edad: ${this.age}, Departamento: ${this.department} (Desarrollador), Lenguajes de programación: ${this.programmingLanguages.join(", ")}`;
       // TODO: Retornar información del desarrollador
     }

     calculateSalary(): number {
            return 3000 + (this.programmingLanguages.length * 200);
       // TODO: Salario base 3000 + 200 por cada lenguaje
     }
 
   }
const user: User = {id: 20, name: "Ricardo Zuñiga", age: 37, email: "richardzuñi@gmail.com", gender: "Masculino" };
const developer = new Developer(user, 16, ["JavaScript", "TypeScript", "Python"]);
console.log("Developer:");
console.log(developer.getDetails());
console.log("Salary:", developer.calculateSalary());

   