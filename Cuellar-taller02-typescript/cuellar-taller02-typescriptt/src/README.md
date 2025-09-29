----------------CLASSES--------------------
BaseEmployee:   Al ser declarada como `abstract`, no se puede crear una instancia de ella directamente ya que su propósito es definir propiedades y comportamientos comunes que la subclase Developer tiene que implementar.
Se definieron seis propiedades públicas que todo empleado compartirá: `id`, `name`, `age`, `email`, `gender`, y `department`.
En el Constructor inicialice las propiedades. Toma un objeto `User` (donde proporciona datos personales), un `id` y un `Department` para establecer los detalles básicos del empleado.
Los métodos: Define dos métodos sin cuerpo de implementación. Esto obliga a cualquier clase que extienda `BaseEmploye` a proporcionar su propia lógica específica para estos métodos:
    - `abstract getDetails(): string;`: Cada empleado presenta sus detalles.
    - `abstract calculateSalary(): number;`: Cada empleado calcula su salario.`
Developer: La declaración `export class Developer extends BaseEmploye` crea un tipo de empleado específico.
 Al usar `extends BaseEmploye`, la clase `Developer` adquiere automáticamente todas las propiedades y el constructor de la clase base. Heredando.
Los métodos: Proporciona las implementaciones concretas de los métodos abstractos que le exige `BaseEmploye`:
    - `getDetails()`: Devuelve una cadena de texto **específica para un desarrollador**, incluyendo los datos del empleado y su rol (`(Desarrollador)`).
    - `calculateSalary()`: Implementa un calculo del salario simple y fija para un desarrollador ($4500 + 500 = 5000$).

---

Developer: Este código implementa la clase Developer que hereda de la clase abstracta `BaseEmploye` pero introduce  datos específicos que hacen que el objeto `Developer` sea más funcional.
Herencia: `export class Developer extends BaseEmploye` asegura que el desarrollador hereda todas las propiedades comunes (como `name`, `id`, `age`, `email`, etc.) y está obligado a implementar los métodos abstractos (`getDetails()` y `calculateSalary()`).
Se añade la propiedad privada `private programmingLanguages: string[]`. Esta propiedad almacena una lista de lenguajes de programación, un dato relevante solo para un desarrollador y no para todos los empleados. Al ser `private`, solo es accesible dentro de la clase `Developer`.
El constructor ahora maneja la inicialización de las propiedades heredadas y la nueva propiedad:
Llamada a `super()`:Se llama a `super(user, id, "IT")`. 
 `this.programmingLanguages = languages;` inicializa la lista de lenguajes específicos que se le pasó al constructor.
Los métodos: Utiliza `this.programmingLanguages.join(", ")` para incluir la lista de lenguajes, haciendo que la información del desarrollador sea más completa.
El cálculo del salario es ahora dinámico y basado en la nueva propiedad
 -Define un **salario base** de `3000`.
 -Añade un **bono de `200`** por cada lenguaje de programación que el desarrollador conoce, obteniendo la cuenta con `this.programmingLanguages.length`. Esto simula un salario que depende de las habilidades técnicas. 


---

Manager: La clase Manager se define para representar un empleado con responsabilidades de liderazgo.
Herencia: Asi como Devgedloper, esta extiende  la clase BaseEmploye, asegurando que hereda los detalles básicos del empleado y está obligada a implementar los métodos de salario y detalles.
Propiedad Específica: Introduce la propiedad privada `private teamSize: number`, que almacena el número de personas que el Manager supervisa.
El constructor utiliza `super()` para inicializar los datos heredados (`user`, `id`, `department`) y luego inicializa la propiedad única del Manager (`teamSize`).
Los métodos: 
| **`getDetails()`** : Retorna la información del empleado, incluyendo su rol (Manager) y el Tamaño del equipo(`teamSize`), que es su dato específico. |
| **`calculateSalary()`** : El salario es **dinámico** y se calcula con una fórmula: Salario Base (4000) + Bono por equipo (300 por cada miembro). |

---

--------------------INYECCIÓN DE DEPENDENCIAS------------------

ApiService: Este código implementa una clase de servicio llamada ApiService diseñada para interactuar con una API externa (en este caso, dummyjson.com/users) y gestionar datos de usuarios. Se centra en la encapsulación de la lógica de fetching de datos y el manejo de errores.
Constructor: number: Una propiedad pública para almacenar un valor de tiempo, aunque no se usa en la lógica de fetching, podría ser para timeouts.
private apiUrl: string: La URL base de la API, definida por defecto como "https://dummyjson.com/users". Es private porque no debería modificarse directamente fuera de la clase.
 Métodos Asíncronos: Ambos métodos son async y devuelven una Promise, lo que es estándar para operaciones de red en JavaScript/TypeScript. 
A. getUsers(): Promise<User[]>
Propósito: Obtener una lista de todos los usuarios de la API.
Verifica response.status === 200 (OK) antes de intentar parsear el JSON.
Mapeo de Datos: El código asume que el JSON devuelto contiene una propiedad users y mapea cada objeto de usuario para limitar las propiedades devueltas solo a name, age, email, y gender, asegurando que el resultado coincida con la interfaz User.
Manejo de Errores: En caso de fallo, devuelve un arreglo vacío ([]).
B. getUserById(id: number): Promise<User | null>
Propósito: Obtener los detalles de un único usuario por su ID.
Similar al anterior, verifica el código de estado 200.
Mapeo de Datos: Devuelve el objeto de usuario directamente, incluyendo el id si estuviera en la interfaz User completa.
Manejo de Errores: En caso de fallo o si el usuario no existe (retornando un estado diferente a 200), devuelve null.


---



Employee Service: 
employees: BaseEmploye[]: Un arreglo privado que almacena todas las instancias de empleados (que son de tipo Developer, Manager, etc., pero tipados como el ancestro común BaseEmploye).
apiService: ApiService: Una instancia de ApiService que se utiliza para obtener datos remotos.
Constructor (Inyección de Dependencias): Acepta una instancia de ApiService (apiService: ApiService). Esto se conoce como Inyección de Dependencias (DI), haciendo que la clase sea más fácil de probar y más desacoplada, ya que no crea su propia ApiService.
 Lógica de Carga de Datos (loadEmployeesFromApi):  Llama a this.apiService.getUsers() para obtener los datos de la API. Si la API devuelve al menos 7 usuarios, usa esos datos para crear instancias concretas de empleados:
Crea dos Developer usando los datos de los índices [3] y [6].
Crea un Manager usando los datos del índice [2].
Utiliza el operador de coalescencia nula (??) para proporcionar valores por defecto (ej. languages ?? [], teamSize ?? 0) en caso de que la API no devuelva esas propiedades específicas en el objeto User. Agrega estas nuevas instancias de BaseEmploye al arreglo this.employees.
Incluye un bloque try...catch para manejar cualquier error durante la comunicación con la API.

---------DIFICULTADES--------------
No podía visualizar el codigo en la consola: Me di cuenta que tenia que exportar la clase y luego importar todos los archivos al main. El npm no me funcionaba, tuve que hacerlo manual en el package.json. -_-
No reconocia el async: Lo pude solucionar organizando el tema de la sangria y la importación de archivos
En EmployeeService no podia instanciar los developers: Generaba error cuando hacia el llamado de los atributos porque User era un llamado y no se encontraba dentro de la interface, entonces logre solucionarlo simplemente poniendo users[y el numero de developer] que se hacia en el metodo asincrono.
No leía el Departments para instanciar: Pasaba algo similar con el anterior. No lo podia cambiar en la interface porque me generaba error. Tuve que definir y redefinirlo en el archivo, no me dejaba llamarlo.
Algunos atributos eran opcionales: Llegué a tener en cuenta eso cuando no leía los atributos correspondientes de cada clase. Tuve que cambiarlos en la interface y ponerlos opcionales.


