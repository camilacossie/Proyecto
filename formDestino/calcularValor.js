//Calculos

function calculoValor() {
  const destino = document.getElementById("destinos").value;
  const alojamiento = document.getElementById("alojamiento").value;
  const adultos = document.getElementById("adultos").value;
  const niños = document.getElementById("niños").value;

  //Bariloche

  if (destino === "Bariloche") {
    if (alojamiento === "Cabaña") {
      if (adultos > 0 && niños > 0) {
        valorTotal = adultos * 4.000 + niños * 1.500 + 430.423;
        document.getElementById("valorTotal").value = valorTotal;
        document.getElementById("msgCalculo").innerHTML =
          "El valor del viaje es de $ " +
          valorTotal +
          " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
        document.getElementById("msgCalculo").focus();
        return false;
      } else {
        if (adultos > 0 && niños <= 0) {
          valorTotal = adultos * 4.000 + 430.423;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        }
      }
    } else {
      if (alojamiento === "Hotel") {
        if (adultos > 0 && niños > 0) {
          valorTotal = adultos * 4.000 + niños * 1.500 + 438.933;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        } else {
          if (adultos > 0 && niños <= 0) {
            valorTotal = adultos * 4.000 + 438.933;
            document.getElementById("valorTotal").value = valorTotal;
            document.getElementById("msgCalculo").innerHTML =
              "El valor del viaje es de $ " +
              valorTotal +
              " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
            document.getElementById("msgCalculo").focus();
            return false;
          }
        }
      }
    }
  }

  // El Calafate

  if (destino === "El-Calafate") {
    if (alojamiento === "Cabaña") {
      if (adultos > 0 && niños > 0) {
        valorTotal = adultos * 4.000 + niños * 1.500 + 79.135;
        document.getElementById("valorTotal").value = valorTotal;
        document.getElementById("msgCalculo").innerHTML =
          "El valor del viaje es de $ " +
          valorTotal +
          " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
        document.getElementById("msgCalculo").focus();
        return false;
      } else {
        if (adultos > 0 && niños <= 0) {
          valorTotal = adultos * 4.000 + 79.135;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        }
      }
    } else {
      if (alojamiento === "Hotel") {
        if (adultos > 0 && niños > 0) {
          valorTotal = adultos * 4.000 + niños * 1.500 + 97.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        } else {
          if (adultos > 0 && niños <= 0) {
            valorTotal = adultos * 4.000 + 97.000;
            document.getElementById("valorTotal").value = valorTotal;
            document.getElementById("msgCalculo").innerHTML =
              "El valor del viaje es de $ " +
              valorTotal +
              " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
            document.getElementById("msgCalculo").focus();
            return false;
          }
        }
      }
    }
  }

  // El Chalten
  if (destino === "El-Chalten") {
    if (alojamiento === "Cabaña") {
      if (adultos > 0 && niños > 0) {
        valorTotal = adultos * 4.000 + niños * 1.500 + 120.000;
        document.getElementById("valorTotal").value = valorTotal;
        document.getElementById("msgCalculo").innerHTML =
          "El valor del viaje es de $ " +
          valorTotal +
          " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
        document.getElementById("msgCalculo").focus();
        return false;
      } else {
        if (adultos > 0 && niños <= 0) {
          valorTotal = adultos * 4.000 + 120.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        }
      }
    } else {
      if (alojamiento === "Hotel") {
        if (adultos > 0 && niños > 0) {
          valorTotal = adultos * 4.000 + niños * 1.500 + 150.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        } else {
          if (adultos > 0 && niños <= 0) {
            valorTotal = adultos * 4.000 + 150.000;
            document.getElementById("valorTotal").value = valorTotal;
            document.getElementById("msgCalculo").innerHTML =
              "El valor del viaje es de $ " +
              valorTotal +
              " , al cual debera incluir IVA y servicios extras a contratar.El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
            document.getElementById("msgCalculo").focus();
            return false;
          }
        }
      }
    }
  }
  // Ushuaia
  if (destino === "Ushuaia") {
    if (alojamiento === "Cabaña") {
      if (adultos > 0 && niños > 0) {
        valorTotal = adultos * 4.000 + niños * 1.500 + 132.000;
        document.getElementById("valorTotal").value = valorTotal;
        document.getElementById("msgCalculo").innerHTML =
          "El valor del viaje es de $ " +
          valorTotal +
          " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
        document.getElementById("msgCalculo").focus();
        return false;
      } else {
        if (adultos > 0 && niños <= 0) {
          valorTotal = adultos * 4.000 + 132.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        }
      }
    } else {
      if (alojamiento === "Hotel") {
        if (adultos > 0 && niños > 0) {
          valorTotal = adultos * 4.000 + niños * 1.500 + 148.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        } else {
          if (adultos > 0 && niños <= 0) {
            valorTotal = adultos * 4.000 + 148.000;
            document.getElementById("valorTotal").value = valorTotal;
            document.getElementById("msgCalculo").innerHTML =
              "El valor del viaje es de $ " +
              valorTotal +
              " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
            document.getElementById("msgCalculo").focus();
            return false;
          }
        }
      }
    }
  }
  //San Martin de los Andes
  if (destino === "San-Martin-de-los-Andes") {
    if (alojamiento === "Cabaña") {
      if (adultos > 0 && niños > 0) {
        valorTotal = adultos * 4.000 + niños * 1.500 + 50.000;
        document.getElementById("valorTotal").value = valorTotal;
        document.getElementById("msgCalculo").innerHTML =
          "El valor del viaje es de $ " +
          valorTotal +
          " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
        document.getElementById("msgCalculo").focus();
        return false;
      } else {
        if (adultos > 0 && niños <= 0) {
          valorTotal = adultos * 4.000 + 50.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        }
      }
    } else {
      if (alojamiento === "Hotel") {
        if (adultos > 0 && niños > 0) {
          valorTotal = adultos * 4.000 + niños * 1.500 + 90.000;
          document.getElementById("valorTotal").value = valorTotal;
          document.getElementById("msgCalculo").innerHTML =
            "El valor del viaje es de $ " +
            valorTotal +
            " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
          document.getElementById("msgCalculo").focus();
          return false;
        } else {
          if (adultos > 0 && niños <= 0) {
            valorTotal = adultos * 4.000 + 90.000;
            document.getElementById("valorTotal").value = valorTotal;
            document.getElementById("msgCalculo").innerHTML =
              "El valor del viaje es de $ " +
              valorTotal +
              " , al cual debera incluir IVA y servicios extras a contratar. El programa incluye: Traslados de llegada y salida, 05 noches de alojamiento mas actividades diarias";
            document.getElementById("msgCalculo").focus();
            return false;
          }
        }
      }
    }
  }
  return true;
}
