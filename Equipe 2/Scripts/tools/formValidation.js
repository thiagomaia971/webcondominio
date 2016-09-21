(function(){

    'use strict';

    // Verificando se tudo esta preenchido
    $(document).on("keyup", ":input[required]:visible", function () {
        var isValid = true;

        // Valor do KeyUp
        var valorDigitado = $(this).val();

        // Formulario do Input
        var thisForm = $(this).parents('form:first');
    
        // Se tiver valor
        if (!valorDigitado.isNullOrEmpty()) {

            // Acha todos os inputs que sao requireds e que estao visiveis
            thisForm.find(":input[required]:visible").each(function () {
                // Verifica se e invalido
                if (isInvalido(this)) {
                    isValid = false;
                }
            });

        } else {
            isValid = false;
        }

        // Habilita o botao(.btn-formvalid)
        $(".btn-formvalid").prop("disabled", (isValid) ? "" : "disabled");
        thisForm.data("valid", isValid);

    });

    function isInvalido(input) {
        return ($(input).is(":invalid"));
    }

    String.prototype.isNullOrEmpty = function () {
        return (!this || this.length === 0);
    }

})();