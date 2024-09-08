<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class="pastYear" aria-current={$page.url.pathname === '/2020' ? 'page' : undefined}><a href="/2020/">'20</a></li>
			<li class="pastYear" aria-current={$page.url.pathname === '/2021' ? 'page' : undefined}><a href="/2021/">'21</a></li>
			<li class="pastYear" aria-current={$page.url.pathname === '/2022' ? 'page' : undefined}><a href="/2022/">'22</a></li>
			<li class="pastYear" aria-current={$page.url.pathname === '/2023' ? 'page' : undefined}><a href="/2023/">'23</a></li>
			<li class="thisYear" aria-current={$page.url.pathname === '/' ? 'page' : undefined}><a href="/">'24</a></li>
			<div class="fill"></div>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"><img src="/images/logo.png" alt=""></a>
			</li>
			<div class="fill"></div>
			<li aria-current={$page.url.pathname === '/donate/' ? 'page' : undefined}><a href='/donate/'>Támogatás</a></li>
			<li aria-current={$page.url.pathname === '/schedule/' ? 'page' : undefined}><a href='/schedule/'>Programok</a></li>
			<li aria-current={$page.url.pathname === '/tickets/' ? 'page' : undefined}><a href='/tickets/'>Jegyek</a></li>
			<li aria-current={$page.url.pathname === '/about/' ? 'page' : undefined}><a href='/about/'>Rólunk</a></li>
			<li aria-current={$page.url.pathname === '/archive/' ? 'page' : undefined}><a href='/archive/'>Archívum</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		z-index: 3;
	}

	nav {
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: #53006d;
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
		background: var(--background);
		background-size: contain;
	}
	ul li.thisYear a {
		font-size: 24px;
		font-weight: 900;
		/* color: #ebc826; */
	}
	ul li.pastYear a {
		font-size: 24px;
		font-weight: 300;
		color: #333;
	}
	ul li:not(.thisYear, .pastYear, :last-child) {
		margin-right: 1rem;
	}

	.fill {
		flex-grow: 1;
	}

	li {
		position: relative;
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: #010a88;
		font-weight: 500;
		text-transform: uppercase;
		font-size: 1.15rem;
		text-decoration: none;
	}

	nav a img {
		height: 100%;
		filter: brightness(0);
		margin-left: 0.5rem;
	}

	a:hover {
		color: #ebc826;
	}
</style>
