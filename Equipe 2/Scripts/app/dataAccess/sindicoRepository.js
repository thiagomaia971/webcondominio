var sindicoRepository = (function() {

	'use strict';

    function add(sindico){
        var sindicos = getAll();

        if(sindicos == null || sindicos == undefined){
            sindicos = [];
        }

        sindicos.push(sindico);

        window.localStorage.setItem('sindicos', JSON.stringify(sindicos));
    }

    function getAll(){
        var sindicos = JSON.parse(localStorage.getItem("sindicos"));
		
		return sindicos;
    }

    function getSingle(sindicoId){
        var sindicos = getAll();
        var index = sindicoId - 1;

        return sindicos[index];
    }

    function getLastSindico(){
        var sindicos = getAll();
        var index = 1;

        if(sindicos != null || sindicos != undefined){
            index = sindicos.length - 1;
        }else{
            return null;
        }

		return sindicos[index];
    }

    function getSingleByEmail(emailSindico){
        var sindicos = getAll();
        var sindico;

        if(sindicos != null || sindicos != undefined){

            for(var i = 0; i < sindicos.length; i++){

                var _sindico = sindicos[i];
                if(_sindico.email == emailSindico)
                    sindico = _sindico;
                
            }
        }

        return sindico;
    }

    return{
        Add: add,
        GetAll: getAll,
        GetSingle: getSingle,
        GetLastSindico: getLastSindico,
        GetSingleByEmail: getSingleByEmail
    }

})();