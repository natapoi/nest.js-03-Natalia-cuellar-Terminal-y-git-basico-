import { BaseEmploye } from "../classes/BaseEmployee.ts";
import { ApiService } from "./ApiService.ts";
import { Developer } from "../classes/Developer.ts"; // Asegúrate de importar estas clases
import { Manager } from "../classes/Manager.ts";
import type { Department } from "../interfaces/types.ts";

const defaultDepartment = "IT" as Department;

export class EmployeeService {
  private employees: BaseEmploye[] = [];
  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.employees = [];
  }

  // TODO: Inyectar ApiService

  async loadEmployeesFromApi(): Promise<void> {
    try {
      const users = await this.apiService.getUsers();
      console.log("Datos de la API:", users);

  
      if (users.length >= 7) {
        const developer1 = new Developer(users[3], users[3].id, users[3].languages ?? []);
        const developer2 = new Developer(users[6], users[6].id, users[6].languages ??[]);
        const manager = new Manager(users[2],
           users[2].id, 
           (users[2].department ?? defaultDepartment) as  Department,
            users[2].teamSize ?? 0);
        this.employees.push(developer1, developer2, manager);
      } else {
        console.log("No hay suficientes usuarios para crear empleados.");
      }
    } catch (error) {
      console.error("Error al cargar usuarios desde la API:", error);
      // TODO: Cargar usuarios desde API y convertir algunos a empleados
       // Crear 2 developers y 1 manager usando los datos de la API
    }
  }

  getEmployeeById(id: number): BaseEmploye | undefined {
    return this.employees.find(employee => employee.id === id);
       // TODO: Buscar empleado por ID
     }

       getAllEmployees(): BaseEmploye[] {
        return this.employees;
       // TODO: Retornar todos los empleados
     }

       addEmployee(employee: BaseEmploye): void {
        this.employees.push(employee);
        console.log(`Empleado agregado: ${employee.name}`);
       // TODO: Agregar nuevo empleado
     }
   }

   

