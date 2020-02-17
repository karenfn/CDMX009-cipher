let botonPlay = () => {
  let nombre = document.getElementById('first-name').value;
  sessionStorage.setItem('nombre', nombre);
  window.location.href = "checar-codigo.html";
}

let ponerNombre = () => {
  let nombre = sessionStorage.getItem('nombre');
  document.getElementById('user').textContent = nombre;
}
// IDEA: codificamos
// IDEA: debemos llamar a los elementos boton y resultado que estan en el html
const button = document.getElementById("boton");
const llamado = document.getElementById("resultado");


// IDEA: se llama a la accion del boton "generar codigo", se declaran las variables utilizando los id de los elementos del offset y el texto que ingreso el usuario
button.addEventListener("click",()=>{
      let texto= document.getElementById("texto");
      let num=document.getElementById("numero");
      let enlace= window.cipher.encode(num,texto);
// IDEA: llamamos los elemnetos desde el html
llamado.innerHTML= enlace;

    });
    // IDEA: decodificamos

    const buttonde = document.getElementById("botonDecodifica");
    const llamadode = document.getElementById("descifrado");

button.addEventListener("click",()=>{
    let textde= document.getElementById("textsDeco");
    let numde=document.getElementById("numero");
    let enlacede= window.cipher.decode(numde,textde)

llamadode.innerHTML= enlacede;
});
