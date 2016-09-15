(function () {

    $(document).on("click", "#btnCadastrarFornecedor", function (e) {
        //e.preventDefault();
        console.log("button pressed");
    });

    $(":input[required]:visible").on("change", function () {
        var isValid = true;

        if (!IsNullOrEmpty($(this).val())) {

            $(":input[required]:visible").each(function () {
                if (IsNullOrEmpty($(this).val())) {
                    isValid = false;
                }
            });

        }
        $("form").data("isvalid", isValid);

        $(".btn-formvalid").prop("disabled", (isValid)?"":"disabled");

    });



    var IsNullOrEmpty = function (value) {
        return (!value || value.length === 0);
    }

    var verifica = function () {

    }

})();