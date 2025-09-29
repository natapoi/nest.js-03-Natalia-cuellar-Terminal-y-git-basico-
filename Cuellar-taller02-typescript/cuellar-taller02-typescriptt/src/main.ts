import { ApiService } from './services/ApiService.ts';
import { EmployeeService } from "./services/EmployeeService.ts";


   async function main(): Promise<void> {
     try {
       // TODO: Crear instancias de los servicios (inyección de dependencias)
       const apiService = new ApiService(1000, "https://dummyjson.com/users");
       const employeeService = new EmployeeService(apiService);
       // TODO: Cargar empleados desde la API
       await employeeService.loadEmployeesFromApi();


       // TODO: Mostrar información de todos los empleados
       const employees = employeeService.getAllEmployees();
       

       console.log("=== SISTEMA DE EMPLEADOS ===");
       employees.forEach((employee) => {
          console.log(employee.getDetails());
          console.log("Salario:", employee.calculateSalary());
        })
       // TODO: Mostrar detalles y salarios de cada empleado
     } catch (error) {
       console.error("Error en main", error);
     }
   }
main();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   TYPESCRIPT - TALLER 02
  </div>
`


