(function() {

	'use strict';

    $(document).on("click", "#btnCadastroPedidoProduto", function(e){
        e.preventDefault();

        onClickCadastroPedidoProduto();
    });

    function onClickCadastroPedidoProduto(){
        var nomeProduto = $("#NomeProduto").val();
        var quantidade = $("#Quantidade").val();

        var lastPedidoProduto = pedidoProdutoRepository.GetLastPedidoProduto();
        var id = 1;

        console.log(lastPedidoProduto);

        if(lastPedidoProduto != null || lastPedidoProduto != undefined){
            id = lastPedidoProduto.id + 1;
        }
        var pedidoProduto = {
            id: id,
            nomeProduto: nomeProduto,
            quantidade: quantidade,
            solicitacoesOferta: [] 
        };

        pedidoProdutoRepository.Add(pedidoProduto);

        window.location.href = "./PedidosProdutosSindico.html";

    }

})();