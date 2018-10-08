function validateEmail(email)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
function validatePhone(phone) {
    var error = "";
    var stripped = phone.replace(/[\(\)\.\-\ ]/g, '');

    if (stripped == "") {
        error = "You didn't enter a phone number.";
        alert(error)
    } else if (isNaN(parseInt(stripped))) {
        phone = "";
        error = "The phone number contains illegal characters.";
        alert(error)
    } else if (!(stripped.length == 10)) {
        phone = "";
        error = "The phone number is the wrong length. Make sure you included an area code.\n";
        alert(error)
    }
}
function validateForm() {
    var regionOrigen = document.forms["formAgregarViaje"]["region-origen"].value;
    var comunaOrigen = document.forms["formAgregarViaje"]["comuna-origen"].value;
    var regionDestino = document.forms["formAgregarViaje"]["region-destino"].value;
    var regionDestino = document.forms["formAgregarViaje"]["comuna-destino"].value;
    var fechaViaje = document.forms["formAgregarViaje"]["fecha-viaje"].value;
    var espacioDisponible = document.forms["formAgregarViaje"]["espacio-disponible"].value;
    var kilosDisponibles = document.forms["formAgregarViaje"]["kilos-disponibles"].value;
    var email = document.forms["formAgregarViaje"]["email"].value;
    var celular = document.forms["formAgregarViaje"]["celular"].value;
    if (validateEmail(email) && validatePhone(celular)){
        return true
    }
    else {
        return false
    }
}



