/*Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue aprobado o no. 
Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4. */

//el programa pedira por medio de un prompt las notas de cada asignatura y las guardara en una variable.
var asigMa = parseInt(prompt("ingrese su nota en matematicas"));
var asigLen = parseInt(prompt("ingrese su nota en Lenguaje"));
var asigBio = parseInt(prompt("ingrese su nota en biologia"));
var asigQui = parseInt(prompt("ingrese su nota en Quimica"));
var asigFis = parseInt(prompt("ingrese su nota en Fisica"));
var asigHis = parseInt(prompt("ingrese su nota en historia"));
var asigDep = parseInt(prompt("ingrese su nota en deporte"));
var asigEh = parseInt(prompt("ingrese su nota en Electivo Humanista"));
var asigEm = parseInt(prompt("ingrese su nota en Electivo Matematico"));
var asigEb = parseInt(prompt("ingrese su nota en Electivo Biologo"));
//se crea la variable promedio que calculara el promedio total de notas.
var promedio= (asigMa + asigLen + asigBio + asigQui + asigFis + asigHis + asigDep + asigEh + asigEm + asigEb)/10;
// se crea una condicional donde calcula si el promedio es mayor o igual a 4.
if(promedio>=4){
    alert("APROBASTE CON UN " + promedio)
}else{
    alert("REPROBASTE CON UN" + promedio)
}

