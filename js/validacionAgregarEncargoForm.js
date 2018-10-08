function validateForm() {
    var descripcion = document.forms["formAgregarEncargo"]["descripcion"].value;
    var espacio = document.forms["formAgregarEncargo"]["espacio-solicitado"].value;
    var kilos = document.forms["formAgregarEncargo"]["kilos-solicitados"].value;
    var regionOrigen = document.forms["formAgregarEncargo"]["region-origen"].value;
    var comunaOrigen = document.forms["formAgregarEncargo"]["comuna-origen"].value;
    var regionDestino = document.forms["formAgregarEncargo"]["region-destino"].value;
    var regionDestino = document.forms["formAgregarEncargo"]["comuna-destino"].value;
    var foto = document.forms["formAgregarEncargo"]["foto-encargo"].value;
    var email = document.forms["formAgregarEncargo"]["email"].value;
    var celular = document.forms["formAgregarEncargo"]["celular"].value;
    if (regionOrigen == "") {
        alert("Name must be filled out");
        return false;
    }
}