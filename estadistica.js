//Promedio
const lista = [
    100,
    200,
    300,
    500,
];

function calcularPromedio(lista){
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });     
    const promediolista = sumaLista / lista.length;
    return promediolista;
}

//Mediana
const lista1 = [
    100,
    200,
    500,
    400000000,
];


function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}

function calcularMediana(lista1){
    lista1.sort((a, b) => b - a);
    let mediana;
    const mitadLista1 = parseInt(lista1.length / 2);   

    if(esPar(lista1.length)){
            const elemento1 = lista1[mitadLista1];
            const elemento2 = lista1[mitadLista1 - 1];
            const promedio =  calcularPromedio([elemento1,elemento2]);
            mediana = promedio;
    }   else{
            mediana = lista1[mitadLista1];
    }
    return mediana;
}


//Moda

const lista2 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    2,
];

function convertirLista(lista2Objeto){
    // convierte un objeto a arreglo. El metodo sort ordena los elementos.
    const lista2Arreglo = Object.entries(lista2Objeto).sort(function(elementoA,elementoB){
        return elementoA[1] - elementoB[1]; 
   }); 
   return lista2Arreglo;
}

function calcularModa(lista){
    const lista2Objeto = {};

    lista.map( function(elemento){
        if(lista2Objeto[elemento]){
            lista2Objeto[elemento] += 1;
        } else{
            lista2Objeto[elemento] = 1;
        }        
    });         
    const nuevaLista = convertirLista(lista2Objeto);
    const moda = nuevaLista[nuevaLista.length - 1];
    return moda;
}


//Media aritmetica ponderada

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit; 
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;