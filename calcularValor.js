

//Calculos

function calculoValor () {

    let lista = document.getElementById("destino");
    let lista2 = document.getElementById("alojamiento");

    // Obtener el índice de la opción que se ha seleccionado

  let indiceSeleccionado = lista.selectedIndex;
  let indiceSeleccionado2 = lista2.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
   let opcionSeleccionada = lista.options[indiceSeleccionado];
   let opcionSeleccionada2 = lista2.options[indiceSeleccionado];
    
    // Obtener el valor y el texto de la opción seleccionada
    let textoSeleccionado = opcionSeleccionada.text;
    let valorSeleccionado = opcionSeleccionada.value;

    let textoSeleccionado2 = opcionSeleccionada2.text;
    let valorSeleccionado2 = opcionSeleccionada2.value;
    



if (valorSeleccionado === "Bariloche"  &&  valorSeleccionado2 === "Cabaña") {
        document.getElementById("msgCalculo").innerHTML =
        "El valor es de $50.000";
        document.getElementById("msgCalculo").focus();  
} else {
    document.getElementById("msgCalculo").innerHTML =
    "El valor es de $500.000";
    document.getElementById("msgCalculo").focus();  
 return false }
return true


}