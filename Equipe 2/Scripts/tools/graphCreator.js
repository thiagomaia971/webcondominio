var graphCreator = (function () {
    'use strict';

    function create(canvas, label, data, range, type){
        var config = {
        type: type,
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].slice(range.mesDe, range.mesAte),
            datasets: [{
                label: label,
                data: [12, 10, 3, 5, 2, 3, 8, 7, 30, 25, 1, 4].splice(range.mesDe, range.mesAte),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(219, 10, 91, 0.2)',
                    'rgba(102, 51, 153, 0.2)',
                    'rgba(242, 120, 75, 0.2)',
                    'rgba(51, 110, 123, 0.2)',
                    'rgba(31, 58, 147, 0.2)',
                    'rgba(46, 204, 113, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(219, 10, 91, 1)',
                    'rgba(102, 51, 153, 1)',
                    'rgba(242, 120, 75, 1)',
                    'rgba(51, 110, 123, 1)',
                    'rgba(31, 58, 147, 1)',
                    'rgba(46, 204, 113, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };

        var grafico = new Chart(canvas, config);
    }

    return{
        create : create
    };

})();
