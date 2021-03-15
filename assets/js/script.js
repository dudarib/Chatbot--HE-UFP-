$(document).ready(function() {

	var baseUrl = "https://api.wit.ai/message?v=20190518&";
	var accessToken = "Q5XAYOL6WKXFR3NB5RCS73DD7U65SGDH";

	
	var database = new Array();
	database[0] = 'No site, escolha o separador <a href="https://he.ufp.pt/acordos" target="_blank"><b>ACORDOS</b></a>, escreva no campo livre, a sua seguradora/subsistema e identifique os serviços para os quais está disponível.<br>&#10148 Note que para consultas e exames nem todas as especialidades ou médicos são abrangidos. Em caso de dúvida confirme sempre com a sua entidade.';
	database[1] = 'O valor a pagar depende sempre das condições da sua apólice, por esse motivo recomendamos que em caso de dúvida contacte directamente a sua entidade.';
	database[2] = 'Para poder esclarecer dúvidas que tenha acerca das suas faturas sugerimos que nos contacte através do <a href="https://he.ufp.pt/contatos" target="_blank"><b>formulário</b></a> e com o assunto “Faturas”.';
	database[3] = 'AVENIDA FERNANDO PESSOA, Nº 150<br>4420-096 GONDOMAR<br>(GPS: 41.14313,-8.544427)<br>Para mais informações, consulte <a href="https://he.ufp.pt/contatos" target="_blank"><b>aqui</b></a>.';
	database[4] = 'Urgência Adulto | Pediátrico:<br>&#8986 Permanente 24 Horas<br><br>Consultas e Exames:<br>&#8986 08:00 - 21:00<br><br>Visitas de Internamento:<br>&#8986 IMC: 11:00 - 20:00<br>&#8986 UCC: 11:00 - 19:00<br>&#8986 UCRM: 11:00 - 20:00';
	database[5] = 'Geral:<br>&#9742 222 455 455<br><br>Serviço de Urgência:<br>&#9742 222 455 456<br><br>Internamentos:<br>&#9742 IMC: 222 455 431<br>&#9742 UCC: 222 455 457<br>&#9742 UCRM: 222 455 430';
	database[6] = 'Para encontrar um médico no site, pode fazê-lo de duas formas:<br>&#10141 No separador <a href="https://he.ufp.pt/medicos" target="_blank"><b>MÉDICOS</b></a>, pesquise o médico conforme as instruções da página.<br>&#10141 No separador <a href="https://he.ufp.pt/areas-clinicas" target="_blank"><b>ÁREAS CLÍNICAS</b></a>, escolha a especialidade do médico pretendido.';
	database[7] = 'No separador <a href="https://he.ufp.pt/medicos" target="_blank"><b>MÉDICOS</b></a>, insira o nome do médico pretendido, aceda ao seu perfil e verifique a sua "Área Clinica".';
	database[8] = 'No separador <a href="https://he.ufp.pt/medicos" target="_blank"><b>MÉDICOS</b></a>, insira o nome do médico pretendido, aceda ao seu perfil e verifique o seu horário.<br>&#10148 Note que os horários indicados na página do médico não significam vagas de agenda, mas sim os horários nos quais o médico se encontra presente nas instalações.';
	database[9] = 'Para efetuar a marcação de uma consulta, clique <a href="https://he.ufp.pt/entrar?returnUrl=%2Fmarcar-consulta" target="_blank"><b>aqui</b></a> e siga os passos indicados, preenchendo os campos necessários.';
	database[10] = 'Para proceder ao cancelamento e/ou remarcação de uma consulta terá de entrar em contacto connosco.<br>&#9742 222 455 455';
	database[11] = 'Para efetuar a marcação de um exame, clique <a href="https://he.ufp.pt/entrar?returnUrl=%2Fmarcar-exame" target="_blank"><b>aqui</b></a> e siga os passos indicados, preenchendo os campos necessários.';
	database[12] = 'Para proceder ao cancelamento e/ou remarcação de um exame terá de entrar em contacto connosco.<br>&#9742 222 455 455';
	database[13] = 'Cada exame tem a sua preparação e alguns requerem cuidados específicos, por esse motivo sugerimos que fale directamente connosco e nos questione sobre a sua dúvida através do nosso <a href="https://he.ufp.pt/contatos" target="_blank"><b>formulário</b></a>.';
	database[14] = 'Horário das visitas aos doentes internados em quartos individuais, ou duplos:<br>&#8986 11:00 - 20:00<br><br>Os horários das visitas nas unidades especiais são mais restritos, de forma a salvaguardar o descanso dos clientes. O enfermeiro responsável pela unidade informá-lo-á dos respetivos horários.';
	database[15] = '&#10141 Artigos de higiene pessoal e roupa para uso pessoal;<br>&#10141 Para internamento na maternidade, traga roupa para o seu bebé;<br>&#10141 Medicamentos que toma habitualmente;<br>&#10141 Exames que tenha realizado previamente ao internamento, e os respetivos relatórios;<br>&#10141 No caso de internamento de crianças, traga o seu brinquedo preferido e a sua chucha (caso utilize);<br>&#10141 Objetos de valor não devem acompanhar o doente!';
	database[16] = 'Olá, eu sou o Hebot!!! &#9996<br><br>Fui desenvolvido para responder às suas questões o melhor que conseguir.<br><br>De forma a facilitar a nossa comunicação, faça-me questões de forma simples ou por palavras-chave.';
	database[17] = 'Adeus!<br>Espero ter esclarecido todas as suas dúvidas.';

	
	var hi_flag = 0;

	
	var mybot = '<div class="chatCont" id="chatCont">'+
								'<div class="bot_profile">'+
									'<img src="assets/img/chat_bot.png" class="bot_p_img">'+
									'<div class="close">'+
										'<i class="fa fa-times-circle" aria-hidden="true"></i>'+
									'</div>'+
								'</div><!--bot_profile end-->'+
								'<div id="result_div" class="resultDiv"></div>'+
								'<div class="chatForm" id="chat-div">'+
									'<div class="spinner">'+
										'<div class="bounce1"></div>'+
										'<div class="bounce2"></div>'+
										'<div class="bounce3"></div>'+
									'</div>'+
									'<input type="text" id="chat-input" autocomplete="off" placeholder="Escreva aqui a sua pergunta"'+ 'class="form-control bot-txt"/>'+
								'</div>'+
							'</div><!--chatCont end-->'+

							'<div class="profile_div">'+
								'<div class="row">'+
									'<div class="col-hgt">'+
										'<img src="assets/img/chat_bot.png" class="img-profile">'+
									'</div><!--col-hgt end-->'+
								'</div><!--row end-->'+
							'</div><!--profile_div end-->';

	$("mybot").html(mybot);

	
	$('.profile_div').click(function() {
		$('.profile_div').toggle();
		$('.chatCont').toggle();
		$('.bot_profile').toggle();
		$('.chatForm').toggle();
		document.getElementById('chat-input').focus();
		
		if (hi_flag === 0) {
			var val = database[16];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
			hi_flag = 1;
		}
	});

	$('.close').click(function() {
		$('.profile_div').toggle();
		$('.chatCont').toggle();
		$('.bot_profile').toggle();
		$('.chatForm').toggle();
	});


	var session = function() {		
		if(sessionStorage.getItem('session')) {
			var retrievedSession = sessionStorage.getItem('session');
		} else {		
			var randomNo = Math.floor((Math.random() * 1000) + 1);	
			var timestamp = Date.now();		
			var date = new Date();
			var weekday = new Array(7);
			weekday[0] = "Sunday";
			weekday[1] = "Monday";
			weekday[2] = "Tuesday";
			weekday[3] = "Wednesday";
			weekday[4] = "Thursday";
			weekday[5] = "Friday";
			weekday[6] = "Saturday";
			var day = weekday[date.getDay()];		
			var session_id = randomNo+day+timestamp;		
			sessionStorage.setItem('session', session_id);
			var retrievedSession = sessionStorage.getItem('session');
		}
		return retrievedSession;
	}


	var mysession = session();

	
	$('#chat-input').on('keyup keypress', function(e) {
		var keyCode = e.keyCode || e.which;
		var text = $("#chat-input").val();
		if (keyCode === 13) {
			if(text == "" ||  $.trim(text) == '') {
				e.preventDefault();
				return false;
			} else {
				$("#chat-input").blur();
				setUserResponse(text);
				send(text);
				e.preventDefault();
				return false;
			}
		}
	});


	function send(text) {
		$.ajax({
			type: "GET",
			url: baseUrl+"q="+text+"&lang=en-us&sessionId="+mysession,
			contentType: "application/json",
			dataType: "json",
			headers: {
				"Authorization": "Bearer " + accessToken
			},
			success: function(data) {
				main(data);
			}
		});
	}

	
	function first_entity_value(entities, entity) {
		if (!(entity in entities)) {
			return false;
		}
		var val = entities[entity][0]['value'];
		if (!val) {
			return false;
		}
		return val;
	}

	
	function main(data) {
		var entities = data['entities'];
		var seguradora = first_entity_value(entities, 'seguradora');
		var especialidade = first_entity_value(entities, 'especialidade');
		var valor = first_entity_value(entities, 'valor');
		var fatura = first_entity_value(entities, 'fatura');
		var localizacao = first_entity_value(entities, 'localizacao');
		var hospital = first_entity_value(entities, 'hospital');
		var horario = first_entity_value(entities, 'horario');
		var contacto = first_entity_value(entities, 'contacto');
		var encontar = first_entity_value(entities, 'encontrar');
		var medico = first_entity_value(entities, 'medico');
		var marcar = first_entity_value(entities, 'marcar');
		var alterar = first_entity_value(entities, 'alterar');
		var consulta = first_entity_value(entities, 'consulta');
		var exame = first_entity_value(entities, 'exame');
		var aviso = first_entity_value(entities, 'aviso');
		var visitar = first_entity_value(entities, 'visitar');
		var internado = first_entity_value(entities, 'internado');
		var ola = first_entity_value(entities, 'ola');
		var adeus = first_entity_value(entities, 'adeus');
		var nome_medico = first_entity_value(entities, 'nome_medico');

		if (seguradora && especialidade && valor) {
			var val = database[1];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (seguradora && especialidade) {
			var val = database[0];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (localizacao && hospital) {
			var val = database[3];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (encontar && medico) {
			var val = database[6];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (especialidade && medico) {
			var val = database[7];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (horario && medico) {
			var val = database[8];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (marcar && consulta) {
			var val = database[9];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (alterar && consulta) {
			var val = database[10];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (marcar && exame) {
			var val = database[11];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (alterar && exame) {
			var val = database[12];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (aviso && exame) {
			var val = database[13];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (internado && aviso) {
			var val = database[15];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (fatura) {
			var val = database[2];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (horario) {
			var val = database[4];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (contacto) {
			var val = database[5];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (visitar) {
			var val = database[14];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (ola) {
			var val = database[16];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (adeus) {
			var val = database[17];
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}
		else if (nome_medico) {
			$.ajax({
				type: "GET",
				url: "https://he.ufp.pt/api/doctors/"+nome_medico,
				contentType: "application/json",
				dataType: "json",
				success: function(data) {
					var dataName = data['data']['name'];
					var dataSpecialtie = data['data']['specialties']['0']['name']['pt'];
					var dataHorarioDoutor_seg = data['data']['hours']['seg'];
					var dataHorarioDoutor_ter = data['data']['hours']['ter'];
					var dataHorarioDoutor_qua = data['data']['hours']['qua'];
					var dataHorarioDoutor_qui = data['data']['hours']['qui'];
					var dataHorarioDoutor_sex = data['data']['hours']['sex'];
					var dataHorarioDoutor_sab = data['data']['hours']['sab'];
					var dataHorarioDoutor_dom = data['data']['hours']['dom'];

					var BotResponse = '<p class="botResult">Eu conheço o/a Dr. ' + dataName + '! A sua área clínica é ' + dataSpecialtie + ' e o seu horário é: '+ '<br></br>'+	'seg: '+ dataHorarioDoutor_seg + '<br></br>'+
																																									'ter: '+ dataHorarioDoutor_ter +'<br></br>'+
																																								 	'qua: '+ dataHorarioDoutor_qua +'<br></br>'+
																																								  	'qui: '+ dataHorarioDoutor_qui +'<br></br>'+
																																								 	'sex: '+ dataHorarioDoutor_sex +'<br></br>'+
																																								 	'sab: '+ dataHorarioDoutor_sab +'<br></br>'+
																																									'dom: '+ dataHorarioDoutor_dom +'.</p><div class="clearfix"></div>';
					$(BotResponse).appendTo('#result_div');
					scrollToBottomOfResults();
					hideSpinner();
				}
			});
		}

		else {
			val = 'Nao percebo a sua pergunta...<br>Tente colocar a pergunta de forma diferente.';
			var BotResponse = '<p class="botResult">' + val + '</p><div class="clearfix"></div>';
			$(BotResponse).appendTo('#result_div');
		}

		scrollToBottomOfResults();
		hideSpinner();
	}


	function setUserResponse(val) {
		var UserResponse = '<p class="userEnteredText">'+val+'</p><div class="clearfix"></div>';
		$(UserResponse).appendTo('#result_div');
		$("#chat-input").val('');
		scrollToBottomOfResults();
		showSpinner();
	}

	
	function scrollToBottomOfResults() {
		var terminalResultsDiv = document.getElementById('result_div');
		terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
	}

	
	function showSpinner() {
		$('.spinner').show();
	}
	function hideSpinner() {
		$('.spinner').hide();
	}

});