(function () {
    'use strict';

    loadTablePedidos();

    $(document).on("click", "#abrirSolicitarOfertaModal", function () {
    	
    	var numeroPedidoId = $(this).data("pedidoid");
    	
    	onOpenSolicitarOfertaModal(numeroPedidoId);
    	
    });

    $(document).on("click", "#btnSolicitarOferta", function () {
    	
    	var numeroPedidoId = $(this).data("pedidoid");
    	var pedidoProduto = pedidoProdutoRepository.GetSingle(numeroPedidoId);
    	
    	onSolicitarOferta(pedidoProduto);
    	
    })

    $(document).on("click", "#abrirMinhasSolicitacoesModal", function(){
    	
    	var numeroPedidoId = $(this).data("pedidoid");
    	var pedidoProduto = pedidoProdutoRepository.GetSingle(numeroPedidoId)
    	
    	onOpenMinhasSolicitaçõesModal(pedidoProduto);
    });
    




    // ******  Definição de funçoes *********** \\

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

    // Abrir Solicitar Oferta modal
    function onOpenSolicitarOfertaModal(numeroPedidoId){
    	
    	limparModal();
    	    	
    	var todosPedidosProdutos = pedidoProdutoRepository.GetAll();
    	
    	var index = numeroPedidoId - 1;
        console.log(index);

        if(index >= 0){
            var pedidoProduto = todosPedidosProdutos[index];
            
            $("#NomeProduto").text(pedidoProduto.nomeProduto);
            $("#QuantidadePedida").text(pedidoProduto.quantidade);
        }

        $("#btnSolicitarOferta").data("pedidoid", numeroPedidoId);
    	
    }

    // Limpar modal
    function limparModal() {
        var inputs = $("#solicitarOfertaModal").find(":input[required]:visible");

        inputs.each(function () {
            $(this).val("");
        });

    }

    var DESCRICAO = 0;
    var QUANTIDADE_A_FORNECER = 1;
    var PRECO_UNITARIO = 2;
    
    // Solicitar oferta
    function onSolicitarOferta(pedidoProduto){
    	
    	var viewModel =  JSON.parse((JSON.stringify($("#formSolicitarOferta").serializeArray())));
    	
    	var ultimaSolicitacaoOferta = pedidoProdutoRepository.GetLastSolicitacaoOferta(pedidoProduto.id);
    	var id = 1;
    	
    	if(ultimaSolicitacaoOferta != undefined || ultimaSolicitacaoOferta != null){
    		
    		id = ultimaSolicitacaoOferta.id + 1;
    		
    	}
    	
    	var fornecedorLogado = login.GetFornecedorLogado();
    	
    	var solicitacaoOferta = {
    			id: id,
    			pedidoProdutoId: pedidoProduto.id,
    			fornecedorId: fornecedorLogado.id,
    			fornecedor: fornecedorLogado,
    			pedidoProduto: pedidoProduto,
    			descricao: viewModel[DESCRICAO].value,
    			quantidadeFornecer: viewModel[QUANTIDADE_A_FORNECER].value,
    			precoUnitario: viewModel[PRECO_UNITARIO].value,
    			status: statusSolicitacaoOferta.PENDENTE
    	};
    	console.log(solicitacaoOferta);

    	pedidoProdutoRepository.AddSolicitacaoOferta(solicitacaoOferta);
    	
    	$("#solicitarOfertaModal").modal("hide");
    	
    	loadTablePedidos();
    	
    	toastr["success"]("Sua Solicitação de Oferta foi enviada com Sucesso!");
    	
    	limparModal();
    	
    }
    
    // Abrir Minhas Solicitações de Oferta modal
    function onOpenMinhasSolicitaçõesModal(pedidoProduto){
    	
        // localiza o template
        var source = $("#templateTabelaMinhasSolicitacoes").html() + "";
        
        // compila o template
        var template = Handlebars.compile(source);
        
        // define os dados do template
        var dados = {pedidoProduto};
        
        // insere o template
        $("#holderTabelaMinhasSolicitacoes").html(template(dados));
        
    }

})();