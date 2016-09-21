(function () {
    'use strict';

    loadTablePedidos();








    // ******  Definição de funçoes *********** \\

    function loadTablePedidos() {

        // Adicionando um pedido para test ***
        var p = []
        p.push({
            numero: 1,
            nome: "Vassoura",
            quantidade: 3
        });
        window.localStorage.setItem('pedidos', JSON.stringify(p));

        // carregar todos os pedidos registrados no localStorage 
        var pedidos = localStorage.getItem("pedidos");

        // converter de JSON para array de objetos
        pedidos = JSON.parse(pedidos);

        // se existe pelo menos um pedido, insere na tabela
        if (pedidos) {
            var tablePedidosBody = $('#table-pedidos-body');

            pedidos.forEach((pedido) => {

                var templatePedido = `<tr>
                                        <td> ${pedido.numero} </td>
                                        <td> ${pedido.nome}   </td>
                                        <td> ${pedido.quantidade}    </td>
                                        <td>
                                            <button id="abrirSolicitarOfertaModal" class ="btn btn-info" type="button" data-toggle="modal" data-target="#solicitarOfertaModal" data-numeropedido=${pedido.numero} data-backdrop="static" data-keyboard="false"> Solicitar oferta</button> | <button class="btn btn-info" type="button">Minhas ofertas</button>
                                        </td>
                                     </tr>`;

                tablePedidosBody.append($(templatePedido));
            });
        }

    }
    
    $(document).on("click", "#abrirSolicitarOfertaModal", function () {
    	
    	limparModal();
    	
        var numeroPedido = $(this).data("numeropedido");

        var pedidoClickado;

        var pedidos = localStorage.getItem("pedidos");
        pedidos = JSON.parse(pedidos);

        pedidos.forEach((pedido) => {
            if (pedido.numero == numeroPedido) {
                pedidoClickado = pedido;
            }
        });

        $("#NomeProduto").text(pedidoClickado.nome);
        $("#QuantidadePedida").text(pedidoClickado.quantidade);

        $("#NomeProduto");
    });
    
    function limparModal(){
    	var inputs = $("#solicitarOfertaModal").find(":input[required]:visible");
    	
    	//var inputs = form.find(":input[required]:visible");
    	
    	console.log(inputs);
    	inputs.each(function(){
    		$(this).val("");
    	});

    }

})();