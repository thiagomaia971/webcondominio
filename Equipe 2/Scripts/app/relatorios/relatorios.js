(function () {
    'use strict';

    // escuta o click nos dois dropdowns e chama a função generateGraph
    $('#mesDe, #mesAte').on('click', function () {
        generateGraph( $('#mesDe').val(), $('#mesAte').val());
    });


    function generateGraph(mesDe, mesAte) {
        
        mesDe = parseInt(mesDe);
        mesAte = parseInt(mesAte);

        if(mesDe > mesAte){
            $('#selectionErrorModal').modal();
            return;
        }
    
        // caso algum grafico ja tenha sido criado anteriormente
        // é necessario remover o canvas e criar um novo
        if( $('#graficoInadimplencia').length) {
            $('#graficoInadimplencia').remove();
            $('div.container').append( $('<canvas id="graficoInadimplencia" width="400" height="300"></canvas>') )
        }
        var canvas = $('#graficoInadimplencia')[0];

        // numeroInadimplentes é um vetor com a quantidade de inadimplentes de cada mês
        // o primeiro index correponde a janeiro, e assim em diante.
        // esse vetor será preenchido a partir do local storage
        var numeroInadimplentes = [12, 10, 3, 5, 2, 3, 8, 7, 30, 25, 1, 4];

        // numeroInadimplentesFiltrado possui somente o numero dos meses que o usuario selecionou
        var numeroInadimplentesFiltrado = numeroInadimplentes.slice(mesDe, mesAte+1);
        
        // range informa para a função create quais colunas devem aparecer
        var range = {
            mesDe : mesDe, 
            mesAte : mesAte + 1
        }
  
        // criação do grafico
        // canvas = espaço na view para desenhar o grafico
        // numeroInadimplentesFiltrado = um vetor com tamanho de cada coluna 
        // range = quais colunas devem aparecer
        graphCreator.create(canvas, numeroInadimplentesFiltrado, range);
    }

})();



