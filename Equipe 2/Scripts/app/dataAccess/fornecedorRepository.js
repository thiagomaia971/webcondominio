var fornecedorRepository = (function() {

	'use strict';

    function add(fornecedor){
        var fornecedores = getAll();

        if(fornecedores != null || fornecedores != undefined){
            fornecedores.push(fornecedor);
        }else{
            fornecedores = [];
            fornecedores.push(fornecedor);
        }

        window.localStorage.setItem('fornecedores', JSON.stringify(fornecedores));
    }

	function getAll(){

		var fornecedores = JSON.parse(localStorage.getItem("fornecedores"));
		
		return fornecedores;
	}

    function getSingle(fornecedorId){

        var fornecedores = getAll();
        var index = fornecedorId - 1;

        return fornecedores[index];
    }

    function getSingleByEmail(emailFornecedor){
        var fornecedores = getAll();
        var fornecedor;

        //console.log(fornecedores);

        if(fornecedores != null || fornecedores != undefined){

            for(var i = 0; i < fornecedores.length; i++){

                var _fornecedor = fornecedores[i];
                if(_fornecedor.email == emailFornecedor)
                    fornecedor = _fornecedor;
                
            }
        }

        return fornecedor;
    }

    function getLastFornecedor(){
        var fornecedores = getAll();
        var index = 1;

        if(fornecedores != null || fornecedores != undefined){
            index = fornecedores.length - 1;
        }else{
            return null;
        }

		return fornecedores[index];
    }

    return{
        Add: add,
        GetAll: getAll,
        GetSingle: getSingle,
        GetLastFornecedor: getLastFornecedor,
        GetSingleByEmail: getSingleByEmail
    }

})();