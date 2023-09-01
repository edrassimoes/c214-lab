<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
  
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
	  } else {
		imc = 0;
	  }
	}
  </script>
  
  <main>
	<div class="principal">
		<h1>Calculadora de IMC</h1>
		<label>
			Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
		</label>
		<label>
			Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
		</label>
		{#if imc < 18.5}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Abaixo do peso.</p>
		{/if}
		{#if imc > 18.6 && imc < 24.9}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Peso ideal.</p>
		{/if}
		{#if imc > 25 && imc < 29.9}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Levemente acima do peso.</p>
		{/if}
		{#if imc > 30 && imc < 34.9}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Obesidade grau 1.</p>
		{/if}
		{#if imc > 35 && imc < 39.9}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Obesidade grau 2 - Severa.</p>
		{/if}
		{#if imc >= 40}
			<p>Seu IMC é {imc}</p>
			<p class="resultado"><strong>Classificação: </strong>Obesidade grau 3 - Mórbida.</p>
		{/if}
	</div>
  </main>

  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}

	.principal {
		text-align: center;
		display: inline-block;
		border: black solid 1px;
		border-radius: 4px;
		background-color: antiquewhite;
		padding: 32px;
	}
  </style>
  