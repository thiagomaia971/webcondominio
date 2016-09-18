(function () {

    'use strict';

    // Tratar click de cadastro
    $(document).on("click", "#btnCadastrarFornecedor", function (e) {
        //e.preventDefault();

        console.log("button pressed");
    });

    // Verificando se tudo está preenchido
    $(":input[required]:visible").on("keyup", function () {
        var isValid = true;
        
        if (!$(this).val().isNullOrEmpty()) {

            $(":input[required]:visible").each(function () {
                if ($(this).val().isNullOrEmpty()) {
                    isValid = false;
                }
            });

        }else{
            isValid = false;
        }
        $("form").data("isvalid", isValid);

        $(".btn-formvalid").prop("disabled", (isValid)?"":"disabled");

    });


    String.prototype.isNullOrEmpty = function () {
        return (!this || this.length === 0);
    }

    var verifica = function () {

    }

})();