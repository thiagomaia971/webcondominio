var login = (function() {

	'use strict';

	function getFornecedorLogado(){
		// TODO: implementar e fazer o UML do Fornecedor.
		return {
			id: 1
		}; 
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