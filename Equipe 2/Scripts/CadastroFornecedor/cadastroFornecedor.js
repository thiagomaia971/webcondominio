(function () {

    'use strict';

    // Tratar click de cadastro
    $(document).on("click", "#btnCadastrarFornecedor", function (e) {
        e.preventDefault();

        var nomeFornecedor = $("#NomeFornecedor").val();
        $("#mensagemCadastro").css("display", "");
        $("#mensagemCadastro").html('<p class="text-center">Fornecedor <b>' + nomeFornecedor + "</b> foi cadastrado com sucesso!</p>");
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