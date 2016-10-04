(function () {
    'use strict';

    loadTablePedidos();

    $(document).on("click", "#abrirOfertas", function(){
        var pedidoProdutoId = $(this).data("pedidoid");
        onOpenOfertasModal(pedidoProdutoId);
    });

    $(document).on("click", "#aprovarSolicitacao", function(){
        var solicitacaoOfertaId = $(this).data("solicitacaoid");

        onAprovarSolicitacao(solicitacaoOfertaId);
    });

    $(document).on("click", "#reprovarSolicitacao", function(){
        var solicitacaoOfertaId = $(this).data("solicitacaoid");

        onReprovarSolicitacao(solicitacaoOfertaId);
    });

    function loadTablePedidos() {

        // Adicionando um pedido para test ***
        var p = []
        p.push({
            id: 1,
            nomeProduto: "Vassoura",
            quantidade: 3,
            solicitacoesOferta: []
        });
        //pedidoProdutoRepository.Add(p);

        // carregar todos os pedidos registrados no localStorage 
        var pedidos = pedidoProdutoRepository.GetAll();

        // localiza o template
        var source = $('#templateTabelaPedidos').html();
        
        // compila o template
        var template = Handlebars.compile(source);

        // define os dados do template
        var dados = {pedidos};

        // insere o template
        $('#holderTabelaPedidos').html(template(dados));

    }

    function onOpenOfertasModal(pedidoProdutoId){

        var pedidoProduto = pedidoProdutoRepository.GetSingle(pedidoProdutoId);

        // localiza o template
        var source = $("#templateVerOfertas").html() + "";
        
        // compila o template
        var template = Handlebars.compile(source);
        
        // define os dados do template
        var dados = {pedidoProduto};
        
        // insere o template
        $("#holderVerOfertas").html(template(dados));
    }

    function onAprovarSolicitacao(solicitacaoOfertaId){

        changeStatusSolicitacao(solicitacaoOfertaId, statusSolicitacaoOferta.APROVADO);

    }

    function onReprovarSolicitacao(solicitacaoOfertaId){

        changeStatusSolicitacao(solicitacaoOfertaId, statusSolicitacaoOferta.REPROVADO);

    }

    function changeStatusSolicitacao(solicitacaoOfertaId, status){
        var solicitacaoOferta = pedidoProdutoRepository.GetSolicitacaoOferta(solicitacaoOfertaId);

        solicitacaoOferta.status = status;

        var pedidosProdutos = pedidoProdutoRepository.GetAll();
        
        pedidosProdutos[solicitacaoOferta.pedidoProdutoId - 1].solicitacoesOferta[solicitacaoOfertaId - 1] = solicitacaoOferta;

        pedidoProdutoRepository.Update(pedidosProdutos);
        
        onOpenOfertasModal(solicitacaoOferta.pedidoProdutoId);
    }

})();