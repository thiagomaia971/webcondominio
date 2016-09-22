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
		var pedidos = JSON.parse(window.localStorage.getItem("pedidosProdutos"));
		
		pedidos.forEach((pedido) => {
			return (pedido.id === id);
		});
	}
	
	var addSolicitacaoOferta = function(solicitacaoOferta){
		
		var pedido = getSingle(solicitacaoOferta.pedidoProdutoId);
		pedido.solicitacoesOferta.push(solicitacaoOferta);
		
		var pedidosProdutos = getAll();
		produtos[pedido.id] = pedido;
		
		window.localStorage.setItem("pedidosProdutos", pedidosProdutos);
	}
	
	return{
		GetAll: getAll,
		Add: add,
		AddSolicitacaoOferta: addSolicitacaoOferta,
		GetSingle: getSingle
	}
	
})();