//Busca si hay un valor previamente guardado en el navegador en la clave "tema" (ej "dark" o "light").
//Si no hay ninguno, devuelve null.
let tema = localStorage.getItem("tema")
//Solo entra en el bloque si tema no es null. Es decir, si se encontró algo.
if (tema) {  // si existe la clave
//Cambia el atributo href del <link id="tema">, para que cargue la hoja de estilos del tema guardado.
    document.getElementById('tema').href = "./css/" + tema + ".css"
}

