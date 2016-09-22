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
        
        // se existe pelo menos um pedido, insere na tabela
        if (pedidos) {
            var tablePedidosBody = $('#table-pedidos-body');
            var countPedido = 0;
            
            pedidos.forEach((pedido) => {
            	
                var templatePedido = `<tr>
                                        <td> ${pedido.id} <input type="hidden" name="Pedidos[${countPedido}].PedidoId" id="Pedidos_${countPedido}__PedidoId" value="${countPedido}"></input> </td>
                                        <td> ${pedido.nomeProduto}   </td>
                                        <td> ${pedido.quantidade}    </td>
                                        <td>
                                            <button id="abrirSolicitarOfertaModal" class ="btn btn-info" type="button" data-toggle="modal" data-target="#solicitarOfertaModal" data-pedidoid=${pedido.id} data-backdrop="static" data-keyboard="false"> Solicitar oferta</button> | <button class="btn btn-info" type="button">Minhas ofertas</button>
                                        </td>
                                     </tr>`;

                tablePedidosBody.append($(templatePedido));
            });
        }

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
    function limparModal(){
    	var inputs = $("#solicitarOfertaModal").find(":input[required]:visible");
    	
    	inputs.each(function(){
    		$(this).val("");
    	});

    }
    
    // Solicitar oferta
    $(document).on("click", "#btnSolicitarOferta", function(){
    	var viewModel = JSON.stringify($("#formSolicitarOferta").serializeArray());
    	console.log(viewModel);
    	
    	
    })

})();