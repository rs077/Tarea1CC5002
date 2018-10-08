function validateEmail(email)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true)
    }
    alert("email invalido")
    return (false)
}
function validatePhone(phone) {
    var error = "";
    var stripped = phone.replace(/[\(\)\.\-\ ]/g, '');

    if (stripped == "") {
        error = "Ingrese un celular.";
        alert(error)
    } else if (isNaN(parseInt(stripped))) {
        phone = "";
        error = "El numero de caracteres no permitidos.";
        alert(error)
    } else if (!(stripped.length == 12)) {
        phone = "";
        error = "El celular tiene un largo incorrecto.";
        alert(error)
    }
    return (false)
}
function validateRegionComunaOrigen(region,comuna) {
    var error = "";
    if (region == "sin-region" || comuna == "sin-region" ) {
        error = "Ingrese region de origen.";
        alert(error)
    }
    else if (comuna == "sin-comuna" ) {
        error = "Ingrese comuna de origen.";
        alert(error)
    }
}
function validateRegionComunaDestino(region,comuna) {
    var error = "";
    if (region == "sin-region" || comuna == "sin-region" ) {
        error = "Ingrese region de destino.";
        alert(error)
    }
    else if (comuna == "sin-comuna" ) {
        error = "Ingrese comuna de destino.";
        alert(error)
    }
}
function validateForm() {
    var regionOrigen = document.forms["formAgregarViaje"]["region-origen"].value;
    var comunaOrigen = document.forms["formAgregarViaje"]["comuna-origen"].value;
    var regionDestino = document.forms["formAgregarViaje"]["region-destino"].value;
    var comunaDestino = document.forms["formAgregarViaje"]["comuna-destino"].value;
    var fechaViaje = document.forms["formAgregarViaje"]["fecha-viaje"].value;
    var espacioDisponible = document.forms["formAgregarViaje"]["espacio-disponible"].value;
    var kilosDisponibles = document.forms["formAgregarViaje"]["kilos-disponibles"].value;
    var email = document.forms["formAgregarViaje"]["email"].value;
    var celular = document.forms["formAgregarViaje"]["celular"].value;
    window.alert(regionOrigen+" "+comunaOrigen+" "+regionDestino+" "+comunaDestino+" fecha:"
        +fechaViaje+". "+espacioDisponible+" "+kilosDisponibles);
    if (validateEmail(email) && validatePhone(celular) && validateRegionComunaOrigen(regionOrigen,comunaOrigen)
    && validateRegionComunaDestino(regionDestino, comunaDestino)){
        alert("Viaje agregado.")
        return true
    }
    return false
}



