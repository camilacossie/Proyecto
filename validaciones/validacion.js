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
  
  if (valorEmail === null || valorEmail.length === 0 ) {
    document.getElementById("menssage2").innerHTML =
      "Campo obligatorio para continuar";
    elemento = document.getElementById("email");
    elemento.focus();
}
if (valorEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail)) {
  document.getElementById("menssage2").innerHTML =
    "Ingresar Email Valido";
  elemento = document.getElementById("email");
  elemento.focus();
  return false;
}
  if (valorMenssage === null || valorMenssage.length === 0) {
    document.getElementById("menssage3").innerHTML =
      "Campo obligatorio para continuar";
    elemento = document.getElementById("msg");
    elemento.focus();
    return false;
  }
  if (valorMenssage.length < 50 ) {
    document.getElementById("menssage3").innerHTML =
      "El mensaje debe contener mas de 50 caracteres";
    elemento = document.getElementById("msg");
    elemento.focus();
    return false;
  }
  return true;
}
