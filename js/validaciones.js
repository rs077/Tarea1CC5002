
function enableSubmit (idForm) {
    $(idForm + " button.submit").removeAttr("disabled");
}

function disableSubmit (idForm) {
    $(idForm + " button.submit").attr("disabled", "disabled");
}

function checkSelect(idSelect) {
    return $(idSelect).val() ? true : false;
}

function checkForm (idForm) {
    $(idForm + " *").on("change keydown", function() {
        if (checkSelect("#region-origen") &&
            checkSelect("#comuna-origen") &&
            checkSelect("#region-destino") &&
            checkSelect("#comuna-destino"))
        {
            enableSubmit(idForm);
        } else {
            disableSubmit(idForm);
        }
    });
}

$(function() {
    checkForm("#formAgregarViaje");
});


$(function()
{
    $("#formAgregarViaje").validate(
      {
        rules:
        {
          region:
          {
            required: true
          }
        }
      });
});