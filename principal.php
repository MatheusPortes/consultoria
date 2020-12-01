<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8"/>
	<meta http-equiv="Pragma" content="no-cache" />
	<link rel="stylesheet" href="css/estilo.css"/>
	<script type="text/javascript" src="js/mudar.js"></script>
	<title>Faveni - Consultoria de Carreira</title>
</head>

<body>
	<?php
	require("header.html");
	?>
	
	<div class="row">
		<div class="coluna col12 borda fundo">
			<div>
				<div class="coluna col2">
					<img class="callcenter" src="img/callcenter.png">
				</div>
				<div class="coluna col10 frase">
					<p>Olá! Eu sou Andressa, especialista em carreiras de sucesso. Meu trabalho é te ajudar a encontrar o melhor caminho para o seu sucesso profissional.</p>
					&nbsp;
					<p>Me conta, qual é o seu momento de formação?</p>
				</div>
			</div>
		</div>
		<div class="row quemResponde">
			<div class="coluna col12 borda">
				<div class="coluna col8">
					<div>
						<p>Minha formação é..</p>
						<select class="botao" onchange="mudarImagem1(this.value)">
							<option value="1">Escolha uma formação</option>
							<option value="2">Cursando o Ensino Medio</option>
							<option value="3">Concluido o Ensino Medio</option>
							<option value="4">Cursando o Ensino Superior</option>
							<option value="5">Concluido o Ensino Superior</option>
							<option value="6">Cursando Pós Graduação</option>
							<option value="7">Concluido Pós Graduação</option>
						</select>
					</div>
				</div>
				<div class="coluna col4">
					<img class="usuario" src="img/usuario.png">
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div id="conteudoPergunta1">
		</div>
	</div>
	<div class="row">
		<div id="conteudoPergunta2">
		</div>
	</div>
</body>
</html>