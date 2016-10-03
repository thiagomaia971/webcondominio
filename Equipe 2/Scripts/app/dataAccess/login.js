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
	
	return{
		GetFornecedorLogado: getFornecedorLogado,
		AddFornecedorLogado: addFornecedorLogado
	}
	
})();