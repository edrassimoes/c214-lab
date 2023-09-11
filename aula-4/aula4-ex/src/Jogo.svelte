<script>
	import Jogador from "./Jogador.svelte";
	import Juiz from "./Juiz.svelte";

	let numeroGols = 0

	function marcaGol() {
		numeroGols = numeroGols + 1
	}

	function anularGol() {
		if (numeroGols != 0) {
			numeroGols = numeroGols - 1
		}
	}

</script>

<main>
	<div class="campo">
		<h1>CAMPO DE FUTEBOL</h1>
		<h2>NÚMERO DE GOLS: {numeroGols}</h2>
		<Jogador acao = {marcaGol}/>
		<Juiz anular = {anularGol}/>
	</div>
</main>

<style>

	.campo {
		text-align: center;
		display: inline-block;
		border: black solid 1px;
		border-radius: 4px;
		background-color: yellowgreen;
		padding: 32px;
	}

	main {
		font-family: sans-serif;
		text-align: center;
		padding: 2rem;
	}

	h1, h2{
		text-decoration: underline darkgreen wavy 2.5px;
	}



</style>