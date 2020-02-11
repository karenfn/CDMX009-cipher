let botonPlay = () => {
  let nombre = document.getElementById('firstname').value;
  sessionStorage.setItem('nombre', nombre);
  window.location.href = "checar-cogigo.html";
}

let ponerNombre = () => {
  let nombre = sessionStorage.getItem('nombre');
  document.getElementById('user').textContent = nombre;
}
