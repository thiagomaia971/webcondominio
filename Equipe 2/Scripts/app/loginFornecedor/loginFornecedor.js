(function() {
    'use strict';

    $(document).on("click", "#btnEntrar", function(){
        onClickEntrar();
    });

    function onClickEntrar(){
        console.log("entrar");

        var email = $("#Email").val();
        var senha = $("#Senha").val();

        var fornecedor = fornecedorRepository.GetSingleByEmail(email);

        if(fornecedor != null || fornecedor != undefined){
            if(fornecedor.senha == senha){

                login.AddFornecedorLogado(fornecedor);
                window.location.href = "../Views/PedidosProdutos.html";
                
            }else{
                toastr["info"]("Login ou Senha incorreto");
            }
        }else{
                toastr["info"]("Login ou Senha incorreto");
            }

    }
    
})();