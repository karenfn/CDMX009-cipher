// IDEA: llamamos al boton y nos traemos la informacion (nombre que ingres ael usuario).
let goButton = () => {
  let nombre = document.getElementById('first-name').value;
  // IDEA: almacenamos la informacion qu extragimos
  sessionStorage.setItem('nombre', nombre);
  // IDEA: localizamos la ruta donde se va a enviar
  window.location.href = "checar-codigo.html";
}
// IDEA: enviaremos la informacion
let ponerNombre = () => {
  // IDEA: obtenemos obtenemos la informacion almacenda
  let nombre = sessionStorage.getItem('nombre');
  // IDEA: le damos salida a la informacion y la enviamos
  document.getElementById('user').textContent = nombre;
}

// IDEA: codificamos
// IDEA: debemos llamar a los elementos boton y resultado que estan en el html
const button = document.getElementById("boton");
const call = document.getElementById("result");


// IDEA: se llama a la accion del boton "generar codigo", se declaran las variables utilizando los id de los elementos del offset y el texto que ingreso el usuario
button.addEventListener("click",()=>{
      let texto= document.getElementById("texto");
      let num=document.getElementById("numero");
      let connect= window.cipher.encode(num,texto);
// IDEA: llamamos los elemnetos desde el html
call.innerHTML= connect;

    });

  // IDEA: decodificamos
    const buttonde = document.getElementById("botonDecodifica");
    const callD = document.getElementById("descifrado");

button.addEventListener("click",()=>{
    let textD= document.getElementById("textsDeco");
    let numde=document.getElementById("numero");
    let connectD= window.cipher.decode(numde,textD)

callD.innerHTML= connectD;
});
