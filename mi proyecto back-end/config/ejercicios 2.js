// EJERCICIOS DE JAVASCRIPT FUNDAMENTALES
// ======================================
// Para ejecutar: node ejercicios.js
// Resuelve cada ejercicio y ejecuta para ver los resultados

console.log("EJERCICIOS DE JAVASCRIPT - FUNDAMENTOS");
console.log("=".repeat(50));

// =================================================================
// EJERCICIOS BÁSICOS
// =================================================================

console.log("\nEJERCICIOS BÁSICOS");
console.log("-".repeat(30));

// EJERCICIO BÁSICO 1: Información Personal
console.log("\n> Ejercicio 1: Crear tu perfil");
console.log("Completa la información y muestra un saludo personalizado:");

// TODO: Completa estas variables con tu información
const miNombre = "Natalia"; // Tu nombre aquí
const miEdad = 17; // Tu edad aquí
const miCiudad = "Popayán"; // Tu ciudad aquí
const misHobbies =[ "Escuchar música"- "Hacer ejercicio" - "Juagr videojuegos" ]; // Agrega 3 hobbies en este array

// TODO: Crea un objeto con tu información personal
const miPerfil = {
  nombre: "Natalia",
  edad: 17,
  ciudad: "Popayán",
  hobbies: ["Escuchar música", "Hacer ejercicio", "Juagr videojuegos"],
  saludo: function() {
    return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}. Mis hobbies son: ${this.hobbies.join(", ")}.`;
  }
  // Agrega: nombre, edad, ciudad, hobbies, y un método saludar()
};

// TODO: Muestra tu información usando template literals
const presentacion = `Hola! Mucho gusto. Mi nombre es Natalia`; // Crea un mensaje de presentación

console.log("Mi presentación:");
console.log(presentacion || ">> Completa el ejercicio");

// EJERCICIO BÁSICO 2: Calculadora Simple
console.log("\n> Ejercicio 2: Calculadora con validaciones");
console.log("Crea funciones matemáticas con validaciones:");

// TODO: Completa estas funciones
function calcular(operacion, num1, num2) {
  // Valida que los números sean válidos
  const n1= 10;
  const n2= 8;
  // Usa switch para las operaciones: "suma", "resta", "multiplicar", "dividir"
  switch (suma)  {
    case "suma" : console.log("sumar(10,8)", sumar(10,8));
    break;  
    case "resta" : console.log("restar(10,8)", restar(10,8));
    break;  
    case "multiplicar" : console.log("multiplicar(10,8)", multiplicar(10,8));
    break;  
    case "dividir" : console.log("dividir(10,8)", dividir(10,8));
    break;  
    default: console.log("Operación no válida");
  }
  // Valida división por cero
  const dividir= (n1,n2) => {
    if (n2=== 0) {
      return "Error: División por cero";
    }
    return n1 / n2;
  }
  // Retorna el resultado o un mensaje de error

}

function esPar(numero) {
  if ( numb1 % 2 == 0) {
    return true;
  } else 
  return false;
  // Retorna true si el número es par, false si es impar
}

function esPositivo(numero) {
  if (numb1 > 0) {
    return true;
  } else 
  return false; 
  // Retorna true si el número es positivo, false si es negativo o cero
}

// Pruebas del ejercicio 2
console.log("Pruebas de la calculadora:");
console.log("   calcular('suma', 5, 3):", calcular("suma", 5, 3) || ">> Completa la función");
console.log(
  "   calcular('dividir', 10, 0):",
  calcular("dividir", 10, 0) || ">> Completa la función"
);
console.log("   esPar(4):", esPar(4) !== undefined ? esPar(4) : ">> Completa la función");
console.log(
  "   esPositivo(-5):",
  esPositivo(-5) !== undefined ? esPositivo(-5) : ">> Completa la función"
);

// =================================================================
// EJERCICIOS AVANZADOS
// =================================================================

console.log("\n\nEJERCICIOS AVANZADOS");
console.log("-".repeat(30));

// EJERCICIO AVANZADO 1: Sistema de Estudiantes
console.log("\n>> Ejercicio Avanzado 1: Gestión de estudiantes");
console.log("Crea un sistema completo de gestión:");

// Datos de ejemplo
const estudiantes = [
  { nombre: "Ana García", edad: 20, notas: [85, 92, 78, 90], activo: true },
  { nombre: "Carlos Ruiz", edad: 22, notas: [88, 76, 95, 82], activo: true },
  { nombre: "María López", edad: 19, notas: [92, 89, 94, 97], activo: false },
  { nombre: "Pedro Silva", edad: 21, notas: [70, 75, 68, 72], activo: true },
  { nombre: "Laura Torres", edad: 20, notas: [95, 88, 92, 90], activo: true },
];

// TODO: Implementa estas funciones usando métodos de array
function calcularPromedio(notas) { 
  return notas.reduce((total, notas) => total + notas, 0) / notas.length;    
  // Calcula el promedio de un array de notas
  // Usa reduce para sumar y divide por la longitud
}

function obtenerEstudiantesActivos(estudiantes) {
  return estudiantes.filter(estudiante => estudiante.activo);
  // Retorna solo los estudiantes que están activos
  // Usa filter
}

function obtenerMejoresEstudiantes(estudiantes, promedioMinimo = 85) {
  return estudiantes
   .map(estudiante => ({
     ...estudiante,
     promedio: calcularPromedio(estudiante.notas)
   }))
   .filter(estudiante => estudiante.promedio > promedioMinimo);
  // Retorna estudiantes con promedio mayor al mínimo
  // Combina map (para calcular promedio) y filter
}

function crearReporte(estudiante) {
  const { nombre, edad, notas } = estudiante;
  const promedio = calcularPromedio(notas);
  const aprobado = promedio >= 75;
  return {
    nombre,
    edad,
    notas,
    promedio,
    aprobado
  };

  // Usa destructuring para extraer nombre, edad, notas
  // Calcula el promedio y determina si aprobó (>= 75)
  // Retorna un objeto con toda la información procesada
}

function buscarEstudiante(estudiantes, nombre) {
  return estudiantes.find(estudiante => estudiante.nombre.toLowerCase().includes(nombre.toLowerCase()));
  // Busca un estudiante por nombre (case insensitive)
  // Usa find y includes o toLowerCase
}

// Pruebas del ejercicio avanzado 1
console.log("Sistema de estudiantes:");

const activos = obtenerEstudiantesActivos(estudiantes);
console.log(`   Estudiantes activos: ${activos?.length || ">> Completa la función"}`);

const mejores = obtenerMejoresEstudiantes(estudiantes, 85);
console.log(`   Mejores estudiantes (>85): ${mejores?.length || ">> Completa la función"}`);

const reporteAna = crearReporte(estudiantes[0]);
console.log("   Reporte de Ana:", reporteAna || ">> Completa la función");

// EJERCICIO AVANZADO 2: Tienda Online
console.log("\n>> Ejercicio Avanzado 2: Tienda online");
console.log("Simula un carrito de compras con descuentos:");

const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 20 },
  { id: 3, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 15 },
  { id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 8 },
  { id: 5, nombre: "Silla", precio: 150, categoria: "muebles", stock: 12 },
];

// TODO: Implementa el sistema de carrito
const carrito = {
  items: [],

  agregarProducto(idProducto, cantidad = 1) {
    const producto = productos.find(producto => producto.id === idProducto);
    if (!producto) {
      console.log("Producto no encontrado");
      return;
    }
    if (producto.stock < cantidad) {
      console.log("Stock insuficiente");
      return;
    }
    const itemCarrito = this.items.find(item => item.id === idProducto);
    if (itemCarrito) {
      itemCarrito.cantidad += cantidad;
    } else {
      this.items.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad });
    }
  },

  removerProducto(idProducto) {
    this.items = this.items.filter(item => item.id !== idProducto);
    console.log(`Producto con ID ${idProducto} removido del carrito.`);
  },

  calcularSubtotal() {
    return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
  },

  aplicarDescuento(porcentaje) {
    const subtotal = this.calcularSubtotal();
    const descuento = (subtotal * porcentaje) / 100;
    const total = subtotal - descuento;
    return { subtotal, descuento, total };
  },

  obtenerResumen() {
    const resumenItems = this.items.map(item => `${item.cantidad} x ${item.nombre} ($${item.precio} c/u)`).join(", ");
    const subtotal = this.calcularSubtotal();
    return `Items: ${resumenItems}. Subtotal: $${subtotal}`;
  }
};

// TODO: Funciones auxiliares
function buscarProductosPorCategoria(categoria) {
  return productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
  // Retorna productos de una categoría específica
  // Usa filter
}

function obtenerProductosCaros(precioMinimo = 100) {
  return productos.filter(producto => producto.precio > precioMinimo);
  // Retorna productos más caros que el mínimo
  // Usa filter
}

function actualizarStock(idProducto, cantidadVendida) {
  const producto = productos.find(producto => producto.id === idProducto);
  if (!producto) {
    console.log("Producto no encontrado");
    return;
  }
  // Actualiza el stock de un producto
  // Usa find y validaciones
}

// Pruebas del ejercicio avanzado 2
console.log("Sistema de tienda:");

// Simulación de uso
carrito.agregarProducto(1, 1); // Laptop
carrito.agregarProducto(2, 2); // 2 Mouse
carrito.agregarProducto(4, 1); // Monitor

const resumen = carrito.obtenerResumen();
console.log("   Resumen del carrito:", resumen || ">> Completa las funciones del carrito");

const descuento = carrito.aplicarDescuento(10);
console.log("   Con descuento 10%:", descuento || ">> Completa la función de descuento");

// =================================================================
// EJERCICIOS DE DESESTRUCTURACIÓN Y SPREAD
// =================================================================

console.log("\n\nEJERCICIOS DE DESESTRUCTURACIÓN Y SPREAD");
console.log("-".repeat(45));

// EJERCICIO: Procesamiento de datos
console.log("\n>> Ejercicio: Manipulación avanzada de datos");

const empresa = {
  nombre: "TechSENA",
  ubicacion: "Bogotá",
  empleados: [
    {
      nombre: "Ana",
      departamento: "desarrollo",
      salario: 3000,
      habilidades: ["JavaScript", "React"],
    },
    {
      nombre: "Carlos",
      departamento: "diseño",
      salario: 2500,
      habilidades: ["Photoshop", "Figma"],
    },
    {
      nombre: "María",
      departamento: "desarrollo",
      salario: 3200,
      habilidades: ["Python", "Django"],
    },
  ],
  proyectos: {
    activos: ["Web SENA", "App Móvil"],
    completados: ["Sistema Admin", "Landing Page"],
  },
};

// TODO: Usa desestructuración para extraer datos
function procesarEmpresa(empresa) {
  const { nombre, ubicacion, empleados, proyectos } = empresa;
  const [primerEmpleado] = empleados; {
    const { nombre: empNombre, departamento, salario, habilidades } = primerEmpleado;
  }
  const { activos, completados } = proyectos;
  return {
    nombre: TechSENA,
    ubicacion: Bogotá,
    primerEmpleado: {
      nombre: Ana,
      departamento: desarrollo,
      salario: 3000,
      habilidades: ["JavaScript", "React"]
    },
    proyectos: {
      activos: ["Web SENA", "App Móvil"],
      completados: ["Sistema Admin", "Landing Page"]
    }
  };
  // Extrae nombre, ubicación, empleados usando destructuring
  // Extrae el primer empleado y sus datos
  // Extrae proyectos activos y completados
  // Retorna un objeto reorganizado con spread operator
}

// TODO: Función para combinar empleados
function combinarEmpleados(empleados1, empleados2) {
  const todosEmpleados = [...empleados1, ...empleados2];
  
  // Combina dos arrays de empleados usando spread
  // Elimina duplicados por nombre
  // Ordena por salario (mayor a menor)
}

// TODO: Función para actualizar empleado
function actualizarEmpleado(empleado, nuevaInfo) {
  // Usa spread para mantener datos existentes y agregar nuevos
  // Combina arrays de habilidades sin duplicados
}

// Datos de prueba
const nuevosEmpleados = [
  { nombre: "Pedro", departamento: "marketing", salario: 2800, habilidades: ["SEO", "Analytics"] },
];

const actualizacionAna = {
  salario: 3300,
  habilidades: ["TypeScript", "Node.js"],
};

// Pruebas
console.log("Procesamiento de empresa:");
const datosEmpresa = procesarEmpresa(empresa);
console.log("   Datos procesados:", datosEmpresa || ">> Completa la función");

// =================================================================
// INSTRUCCIONES FINALES
// =================================================================

console.log("\n\nINSTRUCCIONES PARA COMPLETAR:");
console.log("=".repeat(50));
console.log("1. Busca todos los comentarios que dicen 'TODO:'");
console.log("2. Implementa cada función según las instrucciones");
console.log("3. Ejecuta 'node ejercicios.js' para probar tus soluciones");
console.log("4. Verifica que todos los ejercicios muestren resultados correctos");
console.log("5. Cuando todo funcione, habrás dominado los fundamentos!");

console.log("\nTIPS:");
console.log("• Usa console.log() para debuggear tus funciones");
console.log("• Lee los comentarios cuidadosamente");
console.log("• Prueba cada función por separado");
console.log("• No tengas miedo de experimentar");

console.log("\nÉXITO EN TUS EJERCICIOS!"); 