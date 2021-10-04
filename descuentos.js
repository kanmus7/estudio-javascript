
const cupones = [
   {
    nombre: "cupon 1",
    descuento: 15,
   },
   {
    nombre: "cupon 2",
    descuento: 30,
   },
   {
    nombre: "cupon 3",
    descuento: 25,
   },
];

function validarCupon(inputCupon){
    let datosCupon = cupones.find(function(validaCupon){
        return validaCupon.nombre === inputCupon;
    });
    return datosCupon;
}

function procesarPrecioDescuento (precio,descuento){ 
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento)/100;
    return precioDescuento;
}

function calcularPrecioDescuento(){
    const inputPrecio = document.getElementById("precio").value;
    const inputCupon = document.getElementById("cupones").value;
    const datosCupon = validarCupon(inputCupon);
    if (!datosCupon){
        alert("El cupon seleccionado no existe");
    } else{
    const descuento = datosCupon.descuento;    
    const precioDescuento = procesarPrecioDescuento(inputPrecio,descuento);
    const mensaje = document.getElementById("mensajeDescuento");
    mensaje.innerText = "El precio con descuento son: $" + precioDescuento;
    }    
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioDescuento,
}); */