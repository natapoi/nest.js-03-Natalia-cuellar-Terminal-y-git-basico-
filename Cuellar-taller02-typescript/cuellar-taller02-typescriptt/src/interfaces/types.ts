 
   // Define las siguientes interfaces:
   // Define las siguientes interfaces:
import type { User } from "./interface.ts";
   

  export interface Employee extends User {
     id: number;
     position: string;
     department: Department;
     salary: number;
     habilidades?: string;
   }


export type Department = "IT" | "HR" | "SALES" | "MARKETING";
   
   const employee1: Employee = {
     id: 19,
     name: "Manuel Orozco",
     age: 36,
     email: "manuel136orzco@gmail.com",
     gender: "Masculino",
     position: "Community Manager",
     department: "MARKETING",
     salary: 3500,
     habilidades: "Manejo de redes sociales, creación de contenido y gestión de estrategias de marketing digital.",
   };
   console.log(`Empleado 1:`);
   

   mostrarUsuario(employee1);
   
   function mostrarUsuario(employee1: Employee) {
    console.log (`ID:`, employee1.id);
    console.log (`Nombre:`, employee1.name);
    console.log (`Edad:`, employee1.age);
    console.log (`Email:`, employee1.email);
    console.log (`Género:`, employee1.gender);
    console.log (`Posición:`, employee1.position);
    console.log (`Departamento:`, employee1.department);
    console.log (`Salario:`, employee1.salary);
    console.log (`Habilidades:`, employee1.habilidades);
   }