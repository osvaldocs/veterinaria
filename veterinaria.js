/*Taller Colaborativo: Gestor de Mascotas
Objetivo
Diseñar y programar un gestor de mascotas en JavaScript donde se puedan:
- Registrar mascotas.
- Consultar información.
- Filtrar y organizar datos.
- Aplicar funciones modernas con funciones flecha, listas con objetos.
Organización del Equipo
Cada equipo tendrá 3 integrantes, con los siguientes roles:

Lógica: Crea funciones para agregar, buscar y mostrar mascotas.
Datos: Define la estructura de los objetos de mascota y mantiene la lista.
Presentación: Organiza cómo se imprimen los resultados y mensajes en el navegador, con prompt
Todos deben revisar y probar el código en conjunto.
Requisitos del Proyecto
Cada mascota debe ser representada con un objeto como este:
{
  nombre: "Luna",
  especie: "Perro",
  edad: 3,
  vacunado: true
}
Funcionalidades del Gestor
1. Agregar una nueva mascota a la lista.
2. Buscar mascotas por nombre.
3. Filtrar mascotas vacunadas (usando .filter() y funciones flecha).
4. Calcular el promedio de edad de las mascotas.
5. Mostrar todas las mascotas ordenadas por edad.
Código Esperado
En una lista de diccionarios llamada mascotas, debe de estar el nombre, la edad y la especie(perro, gato, iguana), si esta vacunado o no y que muestre un menu, si elige la opción de agregar mascota el navegador abrirá el prompt para recibir los datos, de igual manera con la opcion buscar mascota por nombre que abra el prompt para buscarlo,  
En la parte de arriba deben de estar las funciones lambdas y luego el menú
Fases del Taller
Tiempo | Actividad
-------|----------
10 min | Reparto de roles y análisis del problema
30 min | Programación colaborativa por módulos
20 min | Pruebas de funcionalidades
Criterios de Éxito
- Todos los miembros entienden y pueden explicar el código.
- Uso correcto de funciones flecha.
- Uso de objetos y listas correctamente.
- Resultados claros e informativos en consola.

Recomendaciónes : Desde el principio tengan claro la tarea de cada integrante, lo que recomiendo es que el lider sea el encargado de hacer el menu y tengan el mismo nombre de las funciones para que al unir codigo sea mas facil
*/

let mascotas = [
    {
        nombre: "Sofi",
        especie: "Perro",
        edad: 12,
        vacunado: true
    },
    
    {
        nombre: "Roco",
        especie: "Perro",
        edad: 11,
        vacunado: true
    },

    {
        nombre: "Kenji",
        especie: "Gato",
        edad: 5,
        vacunado: true
    },

    {
        nombre: "Chiquito",
        especie: "Gato",
        edad: 3,
        vacunado: true
    },

    {
        nombre: "Rango",
        especie: "Camaleon",
        edad: 8,
        vacunado: false
    }


]



const agregarMascotas = () => mascotas.push(pedirDatosMascota());



const buscarMascotaPorNombre = nombre => {
    let mascotaEncontrada = mascotas.find(mascota => mascota.nombre.toLowerCase() === nombre);
    if (mascotaEncontrada) {
        return mascotaEncontrada;
    } else {
        return "Mascota no encontrada"
    }
};

const promedioEdad = mascotas => {
                let suma = 0;
                mascotas.forEach(m => suma += m.edad);
                return (suma / mascotas.length);
};

const mascotasVacunadasEncontradas = () => mascotas.filter(mascota => mascota.vacunado);

const mostrarPorEdad = () => mascotas.sort((a, b) => a.edad - b.edad);

function pedirDatosMascota() {
    let nombre = prompt("Ingresá el nombre de tu mascota:");
    let especie = prompt("Ingresá la especie de tu mascota:");
    let edad = parseInt(prompt("Ingresá su edad:"), 10); // el 10 es un parametro de parseInt para que sepa que la base numerica es decimal
    let estaVacunado = prompt("¿Su mascota está vacunado/a? si / no");
    let vacunado = estaVacunado.toLowerCase() === 'si';
    return {nombre, especie, edad, vacunado}
}



let seguir = true;
while (seguir) {
let opcion = prompt(`Bienvenido a la veterinaria Riwi, por favor elegí una opción para continuar:
    1: Para registrar una nueva mascota.
    2: Para buscar la mascota por el nombre.
    3: Para verficar mascotas vacunadas.
    4: Para calcular el promedio de edad de las mascotas.
    5: Para ver el registro de mascotas, ordenadas por edad.
    6: Para salir del programa.`);

    switch (opcion) {

        case "1":
            agregarMascotas();
            break;

        case "2":
            let nombreBuscado = prompt("Ingresa el nombre de la mascota a buscar").toLowerCase();
            alert(JSON.stringify(buscarMascotaPorNombre(nombreBuscado)));
            break;

        case "3":
            alert(JSON.stringify(mascotasVacunadasEncontradas()));
            break;

        case "4":
            alert("El promedio de edad de las mascotas es: " + promedioEdad(mascotas));
            break;
        case "5":
            mostrarPorEdad();
            alert(JSON.stringify(mascotas));
            break;

        case "6":
            alert("Gracias por confiar en veterinaria Riwi");
            seguir = false;
            break;
    }

    
}
