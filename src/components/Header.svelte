<script lang="ts">
	import { page } from '$app/stores';
    import { onMount } from 'svelte';
	
	export let disableTransprancy = false;

	let transparentMenu = true;
	let menuOpen = false;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	page.subscribe(() => {
		menuOpen = false;
	});

	onMount(() => {
		// close menu on resize
		window.addEventListener('resize', () => {
			menuOpen = false;
		});

		window.addEventListener('scroll', () => {
			if (disableTransprancy) {
				transparentMenu = false;
				return;
			}
			
			const opaqueHeight = (window.innerHeight * 0.4) - 12;
			transparentMenu = window.scrollY < opaqueHeight;
		});
	});
</script>

<header class:transparent={transparentMenu}>
	<nav>
		<div class="menu-icon" on:click={toggleMenu}>
			<span class="burger"></span>
			<span class="burger"></span>
			<span class="burger"></span>
		</div>
		
		<div class="logo">
			<a href="/"><img src="/images/logo.png" alt="Logo"></a>
		</div>
		
		<div class="menu-spacer"></div>

		<ul class:menu-open={menuOpen}>
			<a class="year" href="/archive/2020/"><li class="pastYear">'20</li></a>
			<a class="year" href="/archive/2021/"><li class="pastYear">'21</li></a>
			<a class="year" href="/archive/2022/"><li class="pastYear">'22</li></a>
			<a class="year" href="/archive/2023/"><li class="pastYear">'23</li></a>
			<a class="year" href="/"><li class="thisYear">'24</li></a>

			<li class="logo"><a href="/">
				<img src="/images/logo.png" alt="Logo">
			</a></li>

			<a href='/donate/'><li>Támogatás</li></a>
			<a href='/schedule/'><li>Programok</li></a>
			<a href='/archive/' class="hideOnDesktop"><li>Archívum</li></a>
			<a href='/about/'><li>Rólunk</li></a>
			<a href='/press/'><li>Sajtó</li></a>
			<a href='/contact/'><li>Kapcsolat</li></a>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 4;
		background-color: #000;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 2rem;
		height: 4rem;

		.menu-spacer {
			width: 25px;
		}

		.menu-icon {
			display: flex;
			flex-direction: column;
			gap: 4px;

			span {
				display: block;
			}
		}
	}

	.logo {
		display: flex;
		align-items: center;
		height: 100%;
		
		a {
			height: 100%;
		}


		img {
			height: 100%;
		}
	}

	.burger {
		width: 25px;
		height: 3px;
		background-color: #000;
	}

	ul {
		display: flex;
		list-style: none;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: calc(100vh - 4rem);
		
		padding: 1rem;
		padding-top: 2rem;
		display: none;
		
		.logo {
			display: none;
		}

		a {
			text-decoration: none;
			color: #010a88;
			color: #fff;
			font-weight: 500;
			text-transform: uppercase;
			font-size: 1.15rem;

			&:last-child li {
				margin-bottom: 0;
			}

			&.year {
				display: none;
			}

			&:hover {
				text-decoration: underline;
			}
			
			li {
				cursor: pointer;
				margin-bottom: 1rem;
			}
		}
	}

	.menu-open {
		display: block;
	}

	@media (min-width: 800px) {
		header.transparent {
			background-color: transparent;

			.logo {
				height: 140%;
			}
		}
		nav {
			& > .logo, .menu-icon, .menu-spacer {
				display: none;
			}
			
			ul {
				display: flex;
				position: relative;
				top: unset;
				left: unset;
				height: 100%;
				width: 100%;

				padding: 0;
				flex-direction: row;
				gap: 0.5rem;
				order: 0;

				.logo {
					display: flex;
					flex-grow: 1;
					justify-content: left;
				}

				a {
					height: 100%;

					&:not(:last-child, .year) li {
						margin-right: 0.5rem;
					}

					li {
						height: 100%;
						display: flex;
						align-items: center;
						margin-bottom: 0;
						font-size: 1rem;
					}
				}
			}
		}

		ul li.thisYear {
			font-size: var(--font-size-small-header);
			font-weight: 900;
		}

		ul li.pastYear {
			font-size: var(--font-size-small-header);
			font-weight: 300;
			color: #fff;
		}
	}
	@media (min-width: 980px) {
		nav {
			ul {
				.year {
					display: flex;
				}
				
				.logo {
					justify-content: center;
				}
				
				a {
					&.hideOnDesktop {
						display: none;
					}

					&:not(:last-child, .year) li {
						margin-right: 1rem;
					}

					li {
						font-size: 1.15rem;
					}
				}
			}
		}
	}

	@media (min-width: 769px) {
		
	}
</style>