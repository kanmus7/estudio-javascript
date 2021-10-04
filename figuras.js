// Codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
} 

console.groupEnd();


// Codigo del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,lado3){
    var ladoT1 = parseInt(lado1);
    var ladoT2 = parseInt(lado2);
    var ladoT3 = parseInt(lado3);
    return  ladoT1 + ladoT2 + ladoT3;
}

function areaTriangulo (lado3, altura){
    return (lado3 * altura)/2;
}

console.groupEnd();


// Codigo del Circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo (radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();


//Aca conectamos con el html

function mostrarFigura(seleccion){
    switch(seleccion){
        case "cuadrado": document.getElementById("figuraCuadrado").style.display = "block";
                        document.getElementById("figuraTriangulo").style.display = "none";
                        document.getElementById("figuraCirculo").style.display = "none";
                        document.getElementById("figuraTrianguloI").style.display = "none";  
                        break;

        case "triangulo": document.getElementById("figuraCuadrado").style.display = "none";
                            document.getElementById("figuraTriangulo").style.display = "block";
                            document.getElementById("figuraCirculo").style.display = "none";
                            document.getElementById("figuraTrianguloI").style.display = "none"; 
                            break;

        case "trianguloIs": document.getElementById("figuraCuadrado").style.display = "none";
                            document.getElementById("figuraTriangulo").style.display = "none";
                            document.getElementById("figuraCirculo").style.display = "none";
                            document.getElementById("figuraTrianguloI").style.display = "block";
                            break;  
        case "circulo": document.getElementById("figuraCuadrado").style.display = "none";
                        document.getElementById("figuraTriangulo").style.display = "none";
                        document.getElementById("figuraCirculo").style.display = "block";
                        document.getElementById("figuraTrianguloI").style.display = "none"; 
                        break;             
    }
}

function seleccionFigura(){
    const seleccion = document.getElementById("figuras").value;
    mostrarFigura(seleccion);
}


//Cuadrado
function calcularPerimetroCuadrado(){
    const inputLado = document.getElementById("inputCuadrado");
    const ladoCuadrado = inputLado.value;
    const perimetro = perimetroCuadrado(ladoCuadrado);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const inputLado = document.getElementById("inputCuadrado");
    const ladoCuadrado = inputLado.value;
    const area = areaCuadrado(ladoCuadrado);
    alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const ladoTriangulo1 = document.getElementById("inputTriangulo").value;
    const ladoTriangulo2 = document.getElementById("inputTriangulo").value;
    const ladoTriangulo3 = document.getElementById("inputTriangulo").value;
    const perimetro = perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,ladoTriangulo3);
    alert(perimetro);
}

function calcularAreaTriangulo(){;
    const ladoTriangulo3 = document.getElementById("inputTriangulo").value;
    const alturaTriangulo = document.getElementById("inputAlturaTriangulo").value;
    const area = areaTriangulo(ladoTriangulo3, alturaTriangulo);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){;
    const radio = document.getElementById("inputCirculo").value;
    const area = areaCirculo(radio);
    alert(area);
}

//Triangulo isoceles

function validarTrianguloIsoceles(l1,l2,l3){
    const lado1 = parseInt(l1);
    const lado2 = parseInt(l2);
    const lado3 = parseInt(l3);
    if(lado1 === lado2 && lado3 != lado1 && lado3 != lado2){
        const resultado = calcularAlturaTrianguloIsoceles(lado1,lado2,lado3);
        return resultado;
    } else{
        return false;
    }
}

function calcularAlturaTrianguloIsoceles(lado1,lado2,lado3){
    var a = lado1 * lado2 - Math.pow((lado3/2), 2);
    var h = Math.sqrt(a);
    return h;
}

function alturaTrianguloIsoceles(){    
    const lado1 = document.getElementById("inputTriangulo1").value;
    const lado2 = document.getElementById("inputTriangulo2").value;
    const lado3 = document.getElementById("inputTriangulo3").value;

    const respuestaAltura = validarTrianguloIsoceles(lado1, lado2, lado3);
    if (respuestaAltura != false && respuestaAltura != null){
        alert(respuestaAltura);
    } else{
        alert("Los datos ingresados no corresponden al del triangulo isoceles");
    }
}