<script>
	import { parse } from '../parse.js'
	function onSubmit(e) {
		console.log(parse(e.target.querySelector('[name=equation]').value))
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<input type="text" name="equation" />
	<button>Submit</button>
</form>

<style>
	form {
		font-size: clamp(1rem, calc(1rem + 0.2vmin), 10rem);
		width: 95%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}
	input,
	button {
		background-color: var(--backgroundAlt);
		color: var(--text);
		border: 0;
		font: inherit;
		text-align: center;
	}
	input {
		width: 100%;
		padding: 0.4em;
	}
	input:hover {
		outline: 2px solid var(--text);
	}
	input:focus {
		outline: 2px solid red;
	}
	button {
		padding: 0.5em 1em;
		margin: 0.5em;
	}
	button:hover,
	button:focus {
		cursor: pointer;
		background-color: red;
		color: white;
	}
	button:focus {
		outline: none;
	}
</style>
