<script>
	import Header from '../../components/Header.svelte';
    import '../../app.css';
    import Footer from '../../components/Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-top: 4rem;
		padding-bottom: 0;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		
	}
</style>
