//Validacion

function validacion() {

  valorName = document.getElementById("name").value;
  valorEmail = document.getElementById("email").value;
  valorMenssage = document.getElementById("msg").value;

  if (valorName === null || valorName.length === 0) {
    document.getElementById("menssage1").innerHTML =
      "Campo obligatorio para continuar";
    elemento = document.getElementById("name");
    elemento.focus(); }
  
  if (valorEmail === null || valorEmail.length === 0) {
    document.getElementById("menssage2").innerHTML =
      "Campo obligatorio para continuar";
    elemento = document.getElementById("email");
    elemento.focus();
}
  
  if (valorMenssage === null || valorMenssage.length === 0) {
    document.getElementById("menssage3").innerHTML =
      "Campo obligatorio para continuar";
    elemento = document.getElementById("msg");
    elemento.focus();
    return false;
  }
  return true;
}
