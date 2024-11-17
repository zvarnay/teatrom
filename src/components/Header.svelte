<script lang="ts">
	import { navigating, page } from '$app/stores';
    import { onMount } from 'svelte';
	import { language } from '$lib/contentfulStore';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';
    import { headerOptions } from '$lib/headerOptions';
	
	export let disableTransprancy = false;

	let transparentMenu = true;
	let menuOpen = false;

	let currentLanguage;

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	page.subscribe(() => {
		menuOpen = false;
	});

	// if navigating to the homepage or 2024 page, disable transparency, else enable it
	navigating.subscribe((value) => {
		if (value) {
			console.log(value.to?.route.id);
			if (value.to?.route.id === '/[lang]' || value.to?.route.id === '/[lang]/archive/2024') {
				
				disableTransprancy = true;
				transparentMenu = false;
			} else {
				disableTransprancy = false;
				transparentMenu = true;
			}
		}
	});
	
	onMount(() => {
		console.log('Header language:', currentLanguage);

		currentLanguage = window.location.pathname.split('/')[1];
		language.set(currentLanguage);

		if (
			window.location.pathname === '/hu' || window.location.pathname === '/en' ||
			window.location.pathname === '/hu/archive/2024' || window.location.pathname === '/en/archive/2024'
		) {
			disableTransprancy = true;
			transparentMenu = false;
		}
		
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

	// Switch the locale and update the URL path
	async function switchLocale() {
		language.update((lang) => lang === 'en' ? 'hu' : 'en');
		currentLanguage = get(language);
		
		// Update the URL to include the new language
		const newPath = `/${currentLanguage}`;
		window.location.href = newPath;
	}
</script>

<header class:transparent={transparentMenu}>
	<nav>
		<div class="menu-icon" on:click={toggleMenu}>
			<span class="burger"></span>
			<span class="burger"></span>
			<span class="burger"></span>
		</div>
		
		<div class="logo">
			<a href="/{currentLanguage}/"><img src="/images/logo.png" alt="Logo"></a>
		</div>
		
		<div class="menu-spacer"></div>

		<ul class:menu-open={menuOpen}>
			<button on:click={switchLocale}>{currentLanguage === 'hu' ? 'EN' : 'HU'}</button>
			<a class="year" href="/{currentLanguage}/archive/2020/"><li class="pastYear">'20</li></a>
			<a class="year" href="/{currentLanguage}/archive/2021/"><li class="pastYear">'21</li></a>
			<a class="year" href="/{currentLanguage}/archive/2022/"><li class="pastYear">'22</li></a>
			<a class="year" href="/{currentLanguage}/archive/2023/"><li class="pastYear">'23</li></a>
			<a class="year" href="/{currentLanguage}/archive/2024/"><li class="thisYear">'24</li></a>

			<li class="logo"><a href="/{currentLanguage}/">
				<img src="/images/logo.png" alt="Logo">
			</a></li>

			<a href='https://utcaszak.hu/teatrom-2024-blog/' target="blank"><li>Blog</li></a>

			{#each Object.entries(headerOptions) as [key, option]}
				<a href='/{currentLanguage}/{key}/' class={option['classes'] || ''}><li>{option[currentLanguage]}</li></a>
			{/each}
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
		background-color: #fff;
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
		background-color: #000;

		
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

	button {
		margin-bottom: 1rem;
		padding: 6px 12px;
		height: fit-content;
		border-radius: 1rem;
		background-color: transparent;
		border: 1px solid #fff;
		color: #fff;
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
				background: none;

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

			button {
				margin: auto 0;
				margin-right: 1rem;
			}
		}

		.burger {
			background-color: #fff;
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