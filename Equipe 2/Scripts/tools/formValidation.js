(function(){

    'use strict';

    // Verificando se tudo está preenchido
    $(document).on("keyup", ":input[required]:visible", function () {
        var isValid = true;

        // Valor do KeyUp
        var valorDigitado = $(this).val();

        // Formulário do Input
        var thisForm = $(this).parents('form:first');
    
        // Se tiver valor
        if (!valorDigitado.isNullOrEmpty()) {

            // Acha todos os inputs que são requireds e que estão visiveis
            thisForm.find(":input[required]:visible").each(function () {
                // Verifica se é inválido
                if (isInvalido(this)) {
                    isValid = false;
                }
            });

        } else {
            isValid = false;
        }

        // Habilita o botão(.btn-formvalid)
        $(".btn-formvalid").prop("disabled", (isValid) ? "" : "disabled");

    });

    function isInvalido(input) {
        return ($(input).is(":invalid"));
    }

    String.prototype.isNullOrEmpty = function () {
        return (!this || this.length === 0);
    }

})();