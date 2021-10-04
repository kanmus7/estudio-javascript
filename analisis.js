//Helpers
function esPar(numero){
    return (numero % 2 === 0);     
}

//Promedio
function calcularPromedioSalarios(listaSalariosMitad){
    const sumaSalarios = listaSalariosMitad.reduce(function (indicePrimerSalario = 0, indiceSegundoSalario){
    return indicePrimerSalario + indiceSegundoSalario;
    });     
    const promediolista = sumaSalarios / listaSalariosMitad.length;
    return promediolista;
}

//Calcular Medianas

function calcularMedianaSalarios(listaSalarios){
    let medianaSalarial;
    const mitadSalarios = parseInt(listaSalarios.length / 2); 
    
    if(esPar(listaSalarios.length)){
       const salario1 = listaSalarios[mitadSalarios];
        const salario2 = listaSalarios[mitadSalarios - 1];
        const promedioSalarial =  calcularPromedioSalarios([salario1,salario2]);
        medianaSalarial = promedioSalarial; 
}   else{
         medianaSalarial = listaSalarios[mitadSalarios];
}
    return medianaSalarial;
}

// Mediana General
const salariosCol = colombia.map(function(persona){
    return persona.salario;
});

const salariosColOrdenado = salariosCol.sort(function(indicePrimerSalario, indiceSegundoSalario){
    return indicePrimerSalario - indiceSegundoSalario;
});
const medianaGeneralCol = calcularMedianaSalarios(salariosColOrdenado);

//Mediana top 10%

const corteInicial = (salariosColOrdenado.length * 90)/100;
const corteFinal = salariosColOrdenado.length - corteInicial;
const salariosColTop10 = salariosColOrdenado.splice(corteInicial,corteFinal);
const medianaTop10Col = calcularMedianaSalarios(salariosColTop10);

console.log(medianaGeneralCol, medianaTop10Col);

//Calculo pago y devuelta

