var login = (function() {

	'use strict';

	function getFornecedorLogado(){
		return JSON.parse(window.localStorage.getItem('fornecedorLogado'));
	}

	function addFornecedorLogado(fornecedor){
		window.localStorage.setItem('fornecedorLogado', JSON.stringify(fornecedor));
	}

	function addSindicoLogado(sindico){
		window.localStorage.setItem("sindicoLogado", JSON.stringify(sindico));
	}
	
	return{
		GetFornecedorLogado: getFornecedorLogado,
		AddFornecedorLogado: addFornecedorLogado,
		AddSindicoLogado: addSindicoLogado
	}
	
})();