//¿Qué es una variable y para qué sirve?
//R: es una representacion de un espacio de memoria, sirve para almacenar un valor.
//¿Cuál es la diferencia entre declarar e inicializar una variable?
//R:Inicializar es reservar el espacio, inicializar es llenar el espacio con algo.
//¿Cuál es la diferencia entre sumar números y concatenar strings?
//R: El tipo de dato, mientras sumas con valores tipo number, concatenas es unir variables tipo strings.
//¿Cuál operador me permite sumar o concatenar?
//R: +

// Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//Nombre - string
//Apellido - string
//Nombre de usuario en Platzi - string
//Edad - number
//Correo electrónico - string
//Mayor de edad - boolean
//Dinero ahorrado - number
//Deudas - number

//Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
var nombre = "Sebastian";
var apellido = "Gomez";
var nickPlatzi = "Kanmus";
var edad = 26;
var correo = "sebastiangc.2309@gmail.com";
var mayorDeEdad = true;
var dineroAhorrado = 150000;
var deudas = 0;

console.log(nombre + " " + apellido);
console.log( dineroAhorrado - deudas);



//¿Qué es una función?
//R: Son un conjunto de sentencias que podemos utilizar para realizar ciertas acciones con los valores que guardamos en las variables.
//¿Cuándo me sirve usar una función en mi código?
//R:Cuando requieres llevar a cabo una serie de pasos o calculos para solucionar tareas.
//¿Cuál es la diferencia entre parámetros y argumentos de una función?
//R: los parametros son variables en una definicion de funcion; los argumentos son datos que paso a los parametros de la funcion.
//ejemplo

function parametro (miParametro){
    console.log(miParametro);
}

var argumento = "Soy un argumento";
parametro(argumento);



//Convierte el siguiente código en una función, pero, 
//cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Solucion

var nombre = "Sebastian";
var apellido = "Gomez";
var nick = "Kanmus";

function Nombre(nombre,apellido,nick){
    console.log ("Mi nombre es "+ nombre + " "+ apellido + ", pero prefiero que me digas "+nick);
}
Nombre(nombre, apellido, nick);



//Condicionales
//¿Qué es una condicional?
//R: Es una validacion que hacemos por medio de una o varias condiciones, las cuales tomaran el valor de true o false, si es true, la condicion se cumple, false, no se cumple.
//¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//R: el if else y el switch. La diferencia radica en su uso, el switch se usa para validar casos especificos.
//¿Puedo combinar funciones y condicionales?
//si.

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//Solucion:
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} if (tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional.

const tipoDeSuscripcion = "Basic";

var suscripciones = [
    {tipo: "Free", mensaje: "Solo puedes tomar los cursos gratis" },
    {tipo: "Basic", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
    {tipo: "Expert", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año" },
    {tipo: "ExpertPlus", mensaje: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" },
    ];    

    if(tipoDeSuscripcion != null && tipoDeSuscripcion != undefined && tipoDeSuscripcion !=false){
        var encuentraSuscribicion = suscripciones.find(function(tipoSuscripcion){
            return tipoSuscripcion.tipo === tipoDeSuscripcion;
    });    
    }
    encuentraSuscribicion;
    console.log(encuentraSuscribicion.tipo + ". " + encuentraSuscribicion.mensaje);

//¿Qué es un ciclo?
// Es una repeticion de la instruccion, la cual se da a partir de condiciones iniciales.
//¿Qué tipos de ciclos existen en JavaScript?
// If y While.
//¿Qué es un ciclo infinito y por qué es un problema?
//un ciclo infinito es aquel que continuamente sigue ejecutandose una y otra vez, se vuelve un problema ya que ocupa mucho espacio en memoria haciendo esta ejecucion.
//¿Puedo mezclar ciclos y condicionales?
// Si.

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//Solucion
var i = 0;

while(i < 5){
    console.log("el valor de i es " + i);
    i++;
}

var i = 10;
while( i >= 2){
    console.log("el valor de i es " + i);
    i--;
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
//Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//Pista: puedes usar la función prompt de JavaScript.

var suma = prompt("Cuanto es 2 + 2?", 0);
while (suma != 4) {
    suma = prompt("Cuanto es 2 + 2?", 0);
}
console.log("Felicidades, su respuesta es correcta. " +suma);

//¿Qué es un array? R:El arreglo es un tipo de dato objeto, puede contener mas arreglos.
//¿Qué es un objeto? R: Es una representacion de un objeto del mundo fisico a este paradigma.
//¿Cuándo es mejor usar objetos o arrays? R: Cuando debemos contener varios atributos sobre un mismo objeto o almacenar varios datos.
//¿Puedo mezclar arrays con objetos o incluso objetos con arrays? R: Si

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.


var entrada = prompt("Digite cada elemento del arreglo separado por un espacio:");

var arreglo = function entradaArreglo(elemento){
    return elemento.split(' ');
}

function arregloFinal (entrada){    
    if(entrada != null){               
         var elementos = arreglo(entrada);
         console.log(elementos[0]);               
    }
}

arregloFinal(entrada);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var entrada = prompt("Digite cada elemento del arreglo separado por un espacio:");
var arreglo = function entradaArreglo(elemento){
    return elemento.split(' ');
}

function arregloFinal (entrada){    
    if(entrada != null){               
         var elementos = arreglo(entrada);
         elementos.forEach(function(elemento){
             console.log(elemento);
         })               
    }
}

arregloFinal(entrada);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var miAuto = {
    marca: "Toyoya",
    modelo: "Corolla",
    annio: 2020
};

function imprimirCarro(miAuto){
    if(miAuto != null){
        for( var elemento in miAuto){
            console.log(` ${elemento}: ${miAuto[elemento]}` )
        }
    }
}

imprimirCarro(miAuto);