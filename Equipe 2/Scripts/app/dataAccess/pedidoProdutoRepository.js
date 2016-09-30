var pedidoProdutoRepository = (function() {

	'use strict';

	var getAll = function (){
		var pedidos = JSON.parse(localStorage.getItem("pedidosProdutos"));
		
		return pedidos;
		
	}
	
	var add = function(pedido){
		window.localStorage.setItem('pedidosProdutos', JSON.stringify(pedido));
	}
	
	var getSingle = function(id){
		var pedidos = getAll();
		var index = id - 1;
		
		// retorna um produto caso encontre, undefined caso contrario.
		return pedidos[index];
	}
	
	var addSolicitacaoOferta = function(solicitacaoOferta){
		
		var pedido = getSingle(solicitacaoOferta.pedidoProdutoId);
		
		pedido.solicitacoesOferta.push(solicitacaoOferta);
		
		var pedidosProdutos = getAll();
		pedidosProdutos[pedido.id-1] = pedido;
		
		window.localStorage.setItem("pedidosProdutos", JSON.stringify(pedidosProdutos));
	}
	
	var getLastSolicitacaoOferta = function(pedidoProdutoId){
		var pedidoProduto = getSingle(pedidoProdutoId);
		
		var lastIndex = pedidoProduto.solicitacoesOferta.length - 1;
		
		return pedidoProduto.solicitacoesOferta[lastIndex];
	}
	
	return{
		GetAll: getAll,
		Add: add,
		AddSolicitacaoOferta: addSolicitacaoOferta,
		GetSingle: getSingle,
		GetLastSolicitacaoOferta: getLastSolicitacaoOferta
	}
	
})();