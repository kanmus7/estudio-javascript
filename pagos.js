//crear lista desde js https://www.discoduroderoer.es/como-crear-una-lista-html-en-javascript/

let arregloObjetoPersonas = new Array();

let arregloObjetoPedidos = [
  {nombre: 'hamburguesa', costo: 10000},
  {nombre: 'papas', costo: 8000},
  {nombre: 'malteada', costo: 5000},
  {nombre: 'perroCaliente', costo: 12000}
];

//Funcion que recibe todos los datos de los usuarios y pedidos ingresados.
function recibirDatos(){
    let nombrePersona = document.getElementById("asistentesId").value;
    let pago = document.getElementById("pagoId").value; 
    let pedido = document.getElementById("pedidoId").value;     
    document.getElementById("asistentesId").value = ""
    document.getElementById("pagoId").value = null;
    document.getElementById("pedidoId").value = "";

    if(nombrePersona === "" ||  pago === 0 || pedido === null){
        alert("Debes ingresar todos los datos");
    }else{
      var persona = new Object();
      persona.nombre = nombrePersona;
      persona.pago = pago;
      persona.pedido = pedido;
      persona.costoPedido = calcularValorPedido(pedido);
      if(parseInt(persona.pago) < persona.costoPedido){
        alert("El dinero a pagar debe ser mayor que el costo del pedido");
      } else{
        arregloObjetoPersonas.push(persona);
      }     
    }
  }

   //Funcion que calcula el valor del pedido del usuario. 
  function calcularValorPedido(nombrePedido){   
    let costoPedido = arregloObjetoPedidos.find( ({ nombre }) => nombre === nombrePedido );
    return costoPedido.costo;
  }
  

  //Funcion que calcula el dinero total recogido de los usuarios.
  function calcularDineroRecogido (arregloObjetoPersonas){ 

   const dineroPersona =  arregloObjetoPersonas.map(function(persona){
        return  parseInt(persona.pago);
     });  
      const totalRecogido = dineroPersona.reduce(function(sum = 0, dinero){
            return sum + dinero;
      });
      return totalRecogido; 
  }

//Funcion que calcula el valor total a pagar por los usuarios.
  function calcularPagoTotal(arregloObjetoPersonas){
    const pagoPedido =  arregloObjetoPersonas.map(function(persona){
      return  parseInt(persona.costoPedido);
   });  
    const totalaPagar = pagoPedido.reduce(function(sum = 0, dinero){
          return sum + dinero;
    });
    return totalaPagar;
  }

  //Funcion que calcula la devuelta individual a darle a cada usuario respecto al dinero que puso.
  function calcularDevueltaIndividual(arregloObjetoPersonas){
    let devueltaIndividual = 0;
    const devuelta =  arregloObjetoPersonas.map(function(persona){
     devueltaIndividual =  parseInt(persona.pago) - parseInt(persona.costoPedido);      
     return  {nombre: persona.nombre, devuelta:devueltaIndividual};
   });
    return devuelta;
   }
  
   //Funcion que calcula la devuelta para cada usuario, creando la lista en la vista principal.
   function agregarDevuelta(devuelta){
      var lista=document.getElementById("lista"); 
      devuelta.forEach(function(usuario){
      var nuevoLi= document.createElement("li");    
      var contenidoLi = document.createTextNode(usuario.nombre +' - '+ usuario.devuelta);
      lista.appendChild(nuevoLi);
      lista.appendChild(contenidoLi);
    })
   }

  //Funcion principal que calcula el pago.
  function calcularPago() {
      if(arregloObjetoPersonas.length === 0){
          alert("Debes llenar todos los datos");
      }else{
      document.getElementById("totalPagarId").style.display = "block";      
      const totalRecogido = calcularDineroRecogido(arregloObjetoPersonas); 
      const totalaPagar = calcularPagoTotal(arregloObjetoPersonas);   
      document.getElementById("totalRecogido").value = totalRecogido;
      document.getElementById("totalPago").value = totalaPagar;  
      document.getElementById("totalDevuelta").value = totalRecogido - totalaPagar; 
      let devueltaUsuario = calcularDevueltaIndividual(arregloObjetoPersonas);
      agregarDevuelta(devueltaUsuario); 
      }        
  }
