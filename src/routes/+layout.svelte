<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import MobileMenu from './mobile/mobileMenu.svelte';

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

	let clicked = $state(false);
	let open = $state(false);

	onMount(() => {
		document.querySelectorAll('button.icon svg').forEach((svg) => {
			svg.addEventListener('mouseenter', () => {
				gsap.to(svg, {
					fill: '#f0e90f',
					duration: 1,
					ease: 'power3'
				});
			});

			svg.addEventListener('mouseleave', () => {
				gsap.to(svg, {
					fill: 'white',
					duration: 1,
					ease: 'power3'
				});
			});
		});

		document.querySelectorAll('nav.navbar a').forEach((btn) => {
			let split = SplitText.create(btn, {
				type: 'chars'
			});

			btn.addEventListener('mouseenter', () => {
				gsap.to(split.chars, {
					color: '#f0e90f',
					duration: 0.5,
					ease: 'power3',
					stagger: 0.04
				});
			});

			btn.addEventListener('mouseleave', () => {
				gsap.to(split.chars, {
					color: 'white',
					duration: 0.5,
					ease: 'power3',
					stagger: 0.04
				});
			});

			btn.addEventListener('click', (e) => {
				e.preventDefault();
				gsap.to(window, {
					duration: 1,
					scrollTo: { y: e.target?.parentNode?.hash || 0 },
					ease: 'power3'
				});
			});
		});
	});
</script>

<button
	onclick={() => (clicked === false ? ((clicked = true), (open = true)) : (open = false))}
	aria-label="menu"
	class="icon lg:hidden"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
		width="5vh"
		height="5vh"
		fill="white"
		><path
			d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
		/></svg
	>
</button>

{#if clicked}
	<MobileMenu bind:clicked bind:open />
{/if}

<nav class="geist-mono navbar hidden text-lg">
	<a id="btnhome" href="#intro">Home</a>
	<a id="btnabout" href="#about">About</a>
	<a id="btnprojects" href="#projects">Projects</a>
	<a id="btnresume" href="#resume">Resume</a>
	<a id="btncontact" href="#contact">Contact</a>
</nav>

{@render children()}

<style>
	button.icon {
		position: fixed;
		z-index: 100;
		top: 1%;
		left: 3%;
	}

	@media (min-width: 1024px) {
		nav.navbar {
			visibility: visible;
			position: fixed;
			z-index: 100;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2vw;
			width: 40vw;
			height: 5vh;
			left: 30vw;
			top: 1vh;
			border: 3px solid white;
			border-radius: 20px;
			background: black;
			color: white;
		}
	}
</style>
