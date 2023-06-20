function obtenerNombre() {
    let nombre = prompt("Ingrese su nombre por favor ❗ ");
    if (!isNaN(nombre)) {
      alert("Solo se aceptan letras, vuelve a intentarlo❌ ");
      return obtenerNombre();
    }
    return nombre;
  } 
  let nombreUsuario = obtenerNombre();
  alert("Bienvenido "  + nombreUsuario + " a Zapatillas Pinamar  ✅ ");


function ingreseSuEdad(){
let edad = prompt("¿Que edad tienes? Debes ser mayor de edad para poder hacer compras en este sitio web.  🤨 ")
 if(edad >= 18){
     alert("Usted tiene la edad suficiente para ingresar a este Sitio web.  😁 ")
 }
 else if(edad <= 17){
 alert("Usted no tiene la edad necesaria para hacer compras en este sitio web.🫤 vuelve a intentarlo!! ")
ingreseSuEdad()
 }
 }

 
function ElegirZapatillas(){
let opciones = prompt("ingrese la Zapatilla que le interesa: \n1) Nike \n2)Adidas \n3) Converse \n4)Puma")
    PrecioDelProducto(opciones);
}

 function PrecioDelProducto(opciones){
    switch(opciones){
        case "1":
            alert("El precio de la Zapatilla Nike es de $30.000")
            break;
        case "2":
            alert("El precio de la Zapatilla Adidas es de $20.000")
            break;
        case "3":
            alert("El precio de la Zapatilla Converse es de $15.000")
            break;
        case "4":
            alert("El precio de la Zapatilla Puma es de $15.000")
            break;
        default:
            alert("Por favor solo elije las opciones que se encuentran en pantalla❗❗")
            ElegirZapatillas()
    }
}



ingreseSuEdad()
ElegirZapatillas()
edad()
nombre()