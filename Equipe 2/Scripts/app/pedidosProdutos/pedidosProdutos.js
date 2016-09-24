(function () {
    'use strict';

    loadTablePedidos();








    // ******  Definição de funçoes *********** \\

    function loadTablePedidos() {

        // Adicionando um pedido para test ***
        var p = []
        p.push({
            id: 1,
            nomeProduto: "Vassoura",
            quantidade: 3
        });
        pedidoProdutoRepository.Add(p);

        // carregar todos os pedidos registrados no localStorage 
        var pedidos = pedidoProdutoRepository.GetAll();

        // localiza o template
        var source = $('#templateTabelaPedidos').html();
        // compila o template
        var template = Handlebars.compile(source);
        console.log(template);
        // define os dados do template
        var dados = {pedidos};

        // insere o template
        $('#holderTabelaPedidos').html(template(dados));

    }

    // Abrir modal
    $(document).on("click", "#abrirSolicitarOfertaModal", function () {

        limparModal();

        var numeroPedido = $(this).data("pedidoid");

        var pedidoClickado;

        var pedidos = pedidoProdutoRepository.GetAll();
        //pedidos = JSON.parse(pedidos);

        pedidos.forEach((pedido) => {
            if (pedido.id == numeroPedido) {
                pedidoClickado = pedido;
            }
        });

        $("#NomeProduto").text(pedidoClickado.nomeProduto);
        $("#QuantidadePedida").text(pedidoClickado.quantidade);

        $("#NomeProduto");
    });

    // Limpar modal
    function limparModal() {
        var inputs = $("#solicitarOfertaModal").find(":input[required]:visible");

        inputs.each(function () {
            $(this).val("");
        });

    }

    // Solicitar oferta
    $(document).on("click", "#btnSolicitarOferta", function () {
        var viewModel = JSON.stringify($("#formSolicitarOferta").serializeArray());
        console.log(viewModel);


    })

})();