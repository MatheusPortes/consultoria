function mudarImagem1(item){
	var opc = item;

	var padraoNome = '<div class="row quemResponde">' +
				 '<div class="coluna col12 borda">' +
				 '<div class="coluna col8"><p>Meu nome é:</p><input class="resposta" type="text" name="nome" placeholder="Nome" id="nome"><input class="enviar" type="submit" name="submit" onclick="mudarImagem2(nome.value)"></div>' +
				 '<div class="coluna col4"><img class="usuario" src="img/usuario.png"></div>' +
				 '</div>' +
				 '</div>';

	var fraseEnsinoMedio = '<div class="coluna col10 frase"><p>Que máximo! Me lembro bem quando escolhi minha primeira graduação. São tantas Possibilidades né?</p> &nbsp; <p>Nossa.. me empolguei e esqueci de pergunta o seu nome:</p></div>';

	var fraseEnsinoSuperior = '<div class="coluna col10 frase"><p>Que máximo! Me lembro bem das possibilidades que tive para escolha do meu plano de carreira na especialização. São tantas oportunidades, né?</p> &nbsp; <p>Nossa.. me empolguei e esqueci de pergunta o seu nome:</p></div>';

	var imgCallcenter = '<div class="coluna col2"><img class="callcenter" src="img/callcenter.png"></div>';

	var respostaEnsinoMedio = '<div class="coluna col12 borda fundo">' +
					imgCallcenter +
					fraseEnsinoMedio +
					'</div>' +
					padraoNome;

	var respostaEnsinoSuperior = '<div class="coluna col12 borda fundo">' +
									imgCallcenter +
									fraseEnsinoSuperior +
									'</div>' +
									padraoNome;

	switch(opc){
		case '1':
			document.getElementById("conteudoPergunta1").innerHTML = '';
		break;
		case '2':
			document.getElementById("conteudoPergunta1").innerHTML = respostaEnsinoMedio;
		break;

		case '3':
			document.getElementById("conteudoPergunta1").innerHTML = respostaEnsinoMedio;
		break;
		case '4':
			document.getElementById("conteudoPergunta1").innerHTML = respostaEnsinoSuperior;
		break;
		case '5':
			document.getElementById("conteudoPergunta1").innerHTML = respostaEnsinoSuperior;
		break;
		case '6':
			document.getElementById("conteudoPergunta1").innerHTML = '';
		break;
		case '7':
			document.getElementById("conteudoPergunta1").innerHTML = '';
		break;
	}
}

function mudarImagem2(item){
	var opc = item;

	var resposta1 = '' +
					'' +
					'' +
					'' +
					'' +
					'' +
					'' +
					'' +
					'';

	document.getElementById("conteudoPergunta2").innerHTML = 'Testando chamar variavel: ' + opc;
}