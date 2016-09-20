(function () {

    'use strict';

    // Tratar click de cadastro
    $(document).on("click", "#btnCadastrarFornecedor", function (e) {
        e.preventDefault();

        var nomeFornecedor = $("#NomeFornecedor").val();
        $("#mensagemCadastro").css("display", "");
        $("#mensagemCadastro").html('<p class="text-center">Fornecedor <b>' + nomeFornecedor + "</b> foi cadastrado com sucesso!</p>");
    });

    
})();