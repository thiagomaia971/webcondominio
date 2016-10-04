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
        if( $('#graficoDespesas').length) {
            $('#graficoDespesas').remove();
            $('div.container').append( $('<canvas id="graficoDespesas" width="400" height="300"></canvas>') );
        }
        var canvas = $('#graficoDespesas')[0];

        // numeroDespesas é um vetor com a quantidade de despesas de cada mês
        // o primeiro index correponde a janeiro, e assim em diante.
        // esse vetor será preenchido a partir do local storage
        var numeroDespesas = [12, 10, 3, 5, 2, 3, 8, 7, 30, 25, 1, 4];

        // numeroDespesasFiltrado possui somente o numero dos meses que o usuario selecionou
        var numeroDespesasFiltrado = numeroDespesas.slice(mesDe, mesAte+1);

        // range informa para a função create quais colunas devem aparecer
        var range = {
            mesDe : mesDe,
            mesAte : mesAte + 1
        };

        // criação do grafico
        // primeiro argumento = espaço na view para desenhar o grafico
        // segundo argumento = legenda do grafico
        // terceiro argumento = um vetor com tamanho de cada coluna
        // quarto argumento = quais colunas devem aparecer
        // quinto argumento = estilo do grafico
        graphCreator.create(canvas, 'Total de despesas' , numeroDespesasFiltrado, range, 'pie');
    }

})();
