(function() {

	'use strict';

	// Tratar click de cadastro
	$(document).on(
			"click",
			"#btnCadastrarFornecedor",
			function(e) {
				
				e.preventDefault();
				var thisForm = $(this).parents('form:first');

				var senha = $("#Senha").val();
				var confirmSenha = $("#ConfirmarSenha").val();

				var nomeFornecedor = $("#NomeFornecedor").val();
				
				$("#mensagemCadastro").removeClass(); // Remove todas as classes css
				
				// Verifico se as senhas estão iguais e se o formulario está válido
				if (senha === confirmSenha && thisForm.data("valid") == true) {
					
					$("#mensagemCadastro").addClass("alert").addClass("alert-success"); // Adiciona o alert success
					$("#mensagemCadastro").html(
							'<p class="text-center">Fornecedor <b>'
									+ nomeFornecedor
									+ "</b> foi cadastrado com sucesso!</p>");
					
				}else{
					$("#mensagemCadastro").addClass("alert").addClass("alert-danger");
					$("#mensagemCadastro").html('<p class="text-center">Senhas não são iguais');
				}
				
				$("#mensagemCadastro").css("display", ""); // Deixa visivel na tela
			});

})();