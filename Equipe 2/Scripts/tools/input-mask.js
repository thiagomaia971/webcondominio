(function(){

    'use strict';
    $(".inputmask-cpf").mask("999.999.999-99");
    $(".inputmask-cep").mask("99.999-999");
    $(".inputmask-phone").mask("(99) 9999-9999?9");
    $(".inputmask-date").mask('dd/mm/yyyy');

    /*$(".inputmask-currency").inputmask({
        alias: "numeric",
        prefix: "R$ ",
        groupSeparator: ".",
        radixPoint: ",",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
    });*/

    
})();