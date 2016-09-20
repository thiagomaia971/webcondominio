(function(){

    'use strict';

    // Verificando se tudo est� preenchido
    $(document).on("keyup", ":input[required]:visible", function () {
        var isValid = true;

        // Valor do KeyUp
        var valorDigitado = $(this).val();

        // Formul�rio do Input
        var thisForm = $(this).parents('form:first');
    
        // Se tiver valor
        if (!valorDigitado.isNullOrEmpty()) {

            // Acha todos os inputs que s�o requireds e que est�o visiveis
            thisForm.find(":input[required]:visible").each(function () {
                // Verifica se � inv�lido
                if (isInvalido(this)) {
                    isValid = false;
                }
            });

        } else {
            isValid = false;
        }

        // Habilita o bot�o(.btn-formvalid)
        $(".btn-formvalid").prop("disabled", (isValid) ? "" : "disabled");

    });

    function isInvalido(input) {
        return ($(input).is(":invalid"));
    }

    String.prototype.isNullOrEmpty = function () {
        return (!this || this.length === 0);
    }

})();