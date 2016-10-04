var pedidoProdutoRepository = (function() {

	'use strict';

	var getAll = function (){
		var pedidos = JSON.parse(localStorage.getItem("pedidosProdutos"));
		
		return pedidos;
		
	}
	
	var add = function(pedido){
		var pedidosProdutos = getAll();

		if(pedidosProdutos == null || pedidosProdutos == undefined){
			pedidosProdutos = [];
		}

		pedidosProdutos.push(pedido);

		window.localStorage.setItem('pedidosProdutos', JSON.stringify(pedidosProdutos));
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
	
	var getLastPedidoProduto = function(){
		var pedidos = getAll();

		if(pedidos == null || pedidos == undefined){
			return null;
		}

		return pedidos[pedidos.length - 1];
	}

	var getLastSolicitacaoOferta = function(pedidoProdutoId){
		var pedidoProduto = getSingle(pedidoProdutoId);
		
		var lastIndex = pedidoProduto.solicitacoesOferta.length - 1;
		
		return pedidoProduto.solicitacoesOferta[lastIndex];
	}

	var getSolicitacaoOferta = function(solicitacaoOfertaId){
		var pedidosProdutos = getAll();
		var solicitacaoOferta;
		var index = solicitacaoOfertaId - 1;

		pedidosProdutos.forEach(function(_pedidoProduto) {

			if(_pedidoProduto.solicitacoesOferta[index] != null || 
			   _pedidoProduto.solicitacoesOferta[index] != undefined)	
			   solicitacaoOferta = _pedidoProduto.solicitacoesOferta[index];

		}, this);

		return solicitacaoOferta;
	}

	var update = function(pedidosProdutos){
		window.localStorage.setItem('pedidosProdutos', JSON.stringify(pedidosProdutos));
	}
	
	return{
		GetAll: getAll,
		Add: add,
		AddSolicitacaoOferta: addSolicitacaoOferta,
		GetSingle: getSingle,
		GetLastSolicitacaoOferta: getLastSolicitacaoOferta,
		GetLastPedidoProduto: getLastPedidoProduto,
		GetSolicitacaoOferta: getSolicitacaoOferta,
		Update: update
	}
	
})();