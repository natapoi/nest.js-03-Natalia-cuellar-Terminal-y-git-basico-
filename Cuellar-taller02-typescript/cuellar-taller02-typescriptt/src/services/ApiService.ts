import type { User } from "../interfaces/interface.ts";
export class ApiService {
   public time: number;
   private apiUrl = "https://dummyjson.com/users"

   constructor( time: number, apiUrl?: string) {
     this.time = time;
     this.apiUrl = apiUrl || this.apiUrl;
   }

    
     async getUsers(): Promise<User[]> {
        try {
            const response = await fetch(this.apiUrl);
            const data = await response.status=== 200 ? await response.json() : null;
            return data.users.map((user: any) => ({
                name: user.name,
                age: user.age,
                email: user.email,
                gender: user.gender
            })) 
        } catch (error) {
            return [];
        }
       // TODO: Hacer fetch a la API y mapear solo name, age, email, gender
       // Usar try-catch para manejo de errores
     }

     async getUserById(id: number): Promise<User | null> {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`);
            const user = await response.status === 200 ? await response.json() : null;
            return {
                id: user.id,
                name: user.name,
                age: user.age,
                email: user.email,
                gender: user.gender
            };
        } catch (error) {
            return null;
        }
       // TODO: Obtener un usuario específico de la API
    }
    
   }
   const Users = new ApiService(1000);
   console.log("API Service con URL:");
   Users.getUsers().then(users => console.log("All Users:", users));
   Users.getUserById(1).then(user => console.log("User with ID 1:", user));
   const UserById = new ApiService(1000, "https://dummyjson.com/users");
   UserById.getUserById(3).then(user => console.log("User with ID 3 from custom URL:", user));
   