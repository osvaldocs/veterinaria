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

function agregarMascota() {
    
}

function buscarMacota() {

}

function mostrarMascota() {

}

function pedirDatosMascota() {
    let nombre = prompt("Ingresá el nombre de tu mascota:");
    let especie = prompt("Ingresá la especie de tu mascota:");
    let edad = prompt("Ingresá su edad:");
    let estaVacunado = prompt("¿Su mascota está vacunado/a? si / no");
    let vacunado = estaVacunado.toLowerCase() === 'si';
    return {nombre, especie, edad, vacunado}

}
