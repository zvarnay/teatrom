<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<a href="/archive/2020/"><li class="pastYear">'20</li></a>
			<a href="/archive/2021/"><li class="pastYear">'21</li></a>
			<a href="/archive/2022/"><li class="pastYear">'22</li></a>
			<a href="/archive/2023/"><li class="pastYear">'23</li></a>
			<a href="/"><li class="thisYear">'24</li></a>
			
			<div class="fill"></div>
			<li><a href="/"><img src="/images/logo.png" alt=""></a></li>
			<div class="fill"></div>
			
			<a href='/donate/'><li>Támogatás</li></a>
			<a href='/schedule/'><li>Programok</li></a>
			<a href='/tickets/'><li>Jegyek</li></a>
			<a href='/about/'><li>Rólunk</li></a>
			<a href='/archive/'><li>Archívum</li></a>
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
		z-index: 4;
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

		a {
			height: 100%;
			text-decoration: none;
		}

		li {
			position: relative;
			height: 100%;

			display: flex;
			height: 100%;
			align-items: center;
			color: #010a88;
			font-weight: 500;
			text-transform: uppercase;
			font-size: 1.15rem;

			cursor: pointer;
		}
	}
	ul li.thisYear {
		font-size: 24px;
		font-weight: 900;
	}
	ul li.pastYear {
		font-size: 24px;
		font-weight: 300;
		color: #333;
	}
	ul a:not(:last-child) li:not(.thisYear, .pastYear) {
		margin-right: 1rem;
	}

	.fill {
		flex-grow: 1;
	}

	nav li img {
		height: 100%;
		filter: brightness(0);
		margin-left: 0.5rem;
	}

	a:hover {
		color: #0091ff;
	}
</style>
