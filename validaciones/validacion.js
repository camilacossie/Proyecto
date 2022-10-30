//Validacion

function validacion() {
  let nameOk = false;
  let emailOk = false;
  let emailValidoOk = false;
  let msgOk = false; 

  valorName = document.getElementById("name").value;
  valorEmail = document.getElementById("email").value;
  valorMenssage = document.getElementById("msg").value;

  
  if (valorName === null || valorName.length === 0) {
    document.getElementById("menssage1").innerHTML =
      "Campo obligatorio para continuar";
    document.getElementById("name").focus();
  } else {
    document.getElementById("menssage1").innerHTML = "";
    nameOk = true;
  }

  if (valorEmail === null || valorEmail.length === 0) {
    document.getElementById("menssage2").innerHTML =
      "Campo obligatorio para continuar";
    document.getElementById("email").focus();
  } else {
    document.getElementById("menssage2").innerHTML = "";
    emailOk = true;
  }

  if (valorEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail)) {
    document.getElementById("menssage2").innerHTML = "Ingresar Email Valido";
    document.getElementById("email").focus();
  } else {
    emailValidoOk = true;
  }

  if (valorMenssage.length < 50) {
    document.getElementById("menssage3").innerHTML =
      "Campo obligatorio - El mensaje debe contener mas de 50 caracteres";
    document.getElementById("msg").focus();
  } else {
    document.getElementById("menssage3").innerHTML = "";
    msgOk = true;
  }
  if (nameOk && emailOk && emailValidoOk && msgOk) {
    return true;
  } else {
    return false;
  }
}
