let cartIcon =document.getElementById("carritoIcono")
let carrito =document.querySelector(".carrito")
let cerrarCarrito =document.getElementById("cerrarCarrito")

// carrito abriendo
cartIcon.onclick = () => {
  carrito.classList.add (`active`)
}
// carrito cerrando
cerrarCarrito.onclick = () => {
  carrito.classList.remove (`active`)
}

// carrito operando

if (document.readyState == "cargando"){
  document.addEventListener ("DOMContentLoaded", ready);
} else{
  ready ()
} 

// funcion ready

function ready (){
  let removerCarritoBottones = document.getElementsByClassName (`cart-remove`)
  let removerCarritoBoton = document.getElementsByClassName(`cart-remove`)[0];
  console.log(removerCarritoBottones)
  for (let i = 0; i < removerCarritoBottones.length; i++) {
    let boton = removerCarritoBottones [i]
    boton.addEventListener (`click`, removerCarritoElementos)
    
  }
  // cambio de cantidad
  let cantidadInput = document.getElementsByClassName (`cantidadCarrito`)
  for (let i = 0; i < cantidadInput.length; i++){
    let input = cantidadInput [i]
    input.addEventListener (`change`, cantidadCambio)
  }
}

// remover elementos del carrito
function removerCarritoElementos(event) {
  let bottonClick = event.target
  bottonClick.parentElement.remove ()
  actualizarTotal ()
}
// funcion CantidadCambio
function cantidadCambio (event){
  let input = event.target
  if (isNaN (input.value) || input.value <= 0){
    input.value = 1
  }
  actualizarTotal ()
}

//actualizar el total
function actualizarTotal() {
  let total = 0
  let carritoContenido = document.getElementsByClassName (`carritoContenido`)[0]
  let carritoCajas = carritoContenido.getElementsByClassName (`cajaCarrito`)
  
  for (let i = 0; i < carritoCajas.length ; i++) {
    let cajaCarro = carritoCajas [i]
    let precioElemento = cajaCarro.querySelector('.precioCarrito') 
    let cantidadElemento = cajaCarro.querySelector (`.cantidadCarrito`)
    let precio =  parseFloat (precioElemento.innerText.replace("s/.",""))
    let cantidad = cantidadElemento.value 
    total = total + precio* cantidad
    // si el precio contiene

  }
  document.getElementsByClassName(`totalPrecio`)[0].innerText = `s/.${total.toFixed(2)}`
}

