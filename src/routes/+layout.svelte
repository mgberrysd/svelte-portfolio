<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

	onMount(() => {
		document.querySelectorAll('nav a').forEach((btn) => {
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
				gsap.to(window, { duration: 1, scrollTo: { y: e.target?.parentNode?.hash || 0 }, ease: 'power3' });
			});
		});
	});
</script>

<nav class="geist-mono text-lg">
	<a id="btnhome" href={resolve("/")}>Home</a>
	<a id="btnabout" href="#about">About</a>
	<a id="btnprojects" href="#projects">Projects</a>
	<a id="btnresume" href="#resume">Resume</a>
	<a id="btncontact" href="#contact">Contact</a>
</nav>

{@render children()}

<style>
	nav {
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
</style>
