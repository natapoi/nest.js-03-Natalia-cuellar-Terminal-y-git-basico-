export interface User {
     name: string;
     age: number;
     email: string;
     gender: string;
     id: number; // Opcional, para empleados
     languages?: string[]; // Opcional, para desarrolladores
      department?: string; // Opcional, para managers
      teamSize?: number; // Opcional, para managers
   }