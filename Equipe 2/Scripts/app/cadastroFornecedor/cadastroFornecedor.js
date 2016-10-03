(function() {

	'use strict';

	// Tratar click de cadastro
	$(document).on("click", "#btnCadastrarFornecedor", function(e) {
				
				e.preventDefault();
				var thisForm = $(this).parents('form:first');

				var senha = $("#Senha").val();
				var confirmSenha = $("#ConfirmarSenha").val();
				var nomeFornecedor = $("#NomeFornecedor").val();
				var email = $("#Email").val();
				var tipoLogradouro = $("#TipoLogradouro").val();
				var logradouro = $("#Logradouro").val();
				var numero = $("#Numero").val();
				var cep = $("#Cep").val();
				var telefone = $("#Telefone").val();
				
				$("#mensagemCadastro").removeClass(); // Remove todas as classes css
				
				// Verifico se as senhas estão iguais e se o formulario está válido
				if (senha === confirmSenha && thisForm.data("valid") == true) {
					var ultimoFornecedor = fornecedorRepository.GetLastFornecedor();
					var id = 1;
					
					if(ultimoFornecedor != undefined || ultimoFornecedor != null){
						
						id = ultimoFornecedor.id + 1;
						
					}
					var fornecedor = {
						id: id,
						nomeFornecedor: nomeFornecedor,
						email: email,
						senha: senha,
						tipoLogradouro: tipoLogradouro,
						logradouro: logradouro,
						numero: numero,
						cep: cep,
						telefone: telefone,
						solicitacoesOferta: []
					};

					fornecedorRepository.Add(fornecedor)

					var mensagem =  '<p class="text-center">Fornecedor <b>'
									+ nomeFornecedor
									+ "</b> foi cadastrado com sucesso!</p>";
									console.log(mensagem);
					toastr["success"](mensagem);
					
				}else{
					var mensagem = '<p class="text-center">Senhas não são iguais';

					toastr["info"](mensagem);
				}
				
				$("#mensagemCadastro").css("display", ""); // Deixa visivel na tela
			});

})();