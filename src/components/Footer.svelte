<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { get } from "svelte/store";

	let lang: string, websiteBy: string;
	language.subscribe(value => lang = value);
	$: websiteBy = lang == 'hu' ?
		'weboldal: Hideg Mihály' :
		'website by Mihály Hideg';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="https://utcaszak.hu" target="_blank">© 2024 Utcaszínházi Alkotóközösség</a>
			</li>
			<div class="fill"></div>
			<li class="lowercase">{websiteBy}</li>
		</ul>
	</nav>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		display: flex;
		z-index: 3;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: var(--color-theme-1);
		padding: 0.5rem 2rem;
	}

	ul {
		width: 100%;
		position: relative;
		padding: 0;
		margin: 0;
		height: 3rem;
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.fill {
		flex-grow: 1;
	}

	nav li {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-theme-2);
		font-weight: 500;
		text-transform: uppercase;
		font-size: 1.15rem;
		text-decoration: none;

		&.lowercase {
			text-transform: none;
			color: #666;

			a {
				color: inherit;
			}
		}

		a {
			color: var(--color-theme-2);
		}
	}
</style>
