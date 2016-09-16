(function () {
    'use strict';

    loadTablePedidos();








    // ******  Definição de funçoes *********** \\

    function loadTablePedidos() {
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
                                        <td> ${pedido.qtd}    </td>
                                        <td>  
                                            <button class="btn"> Solicitar oferta</button> | <button class="btn">Minhas ofertas</button>
                                        </td>
                                     </tr>`;

                tablePedidosBody.append($(templatePedido));
            });
        }
    }
})();