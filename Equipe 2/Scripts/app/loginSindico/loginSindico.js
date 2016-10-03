(function() {
    'use strict';

    sindicoRepository.Add(sindicoDefault());

    $(document).on("click", "#btnEntrar", function(){
        onClickEntrar();
    });

    function sindicoDefault(){
        return {
            id: 1,
            email: "admin",
            senha: "123456789"
        };
    }

    function onClickEntrar(){
        console.log("entrar");

        var email = $("#Email").val();
        var senha = $("#Senha").val();

        var sindico = sindicoRepository.GetSingleByEmail(email);

        if(sindico != null || sindico != undefined){
            if(sindico.senha == senha){

                login.AddSindicoLogado(sindico);
                window.location.href = "../Views/PedidosProdutosSindico.html";
                
            }else{
                toastr["info"]("Login ou Senha incorreto");
            }
        }else{
                toastr["info"]("Login ou Senha incorreto");
            }

    }
    
})();