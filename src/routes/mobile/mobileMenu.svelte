<script lang="ts">
	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

	let { clicked = $bindable(), open = $bindable() } = $props();

	$effect(() => {
		if (open == false)
			gsap.to(document.querySelector('nav.mobile'), {
				scale: 0,
				duration: 1,
				ease: 'power4',
				onComplete: () => {
					clicked = false;
				}
			});
	});

	onMount(() => {
		gsap.from(document.querySelector('nav.mobile'), {
			scale: 0,
			duration: 1,
			ease: 'power4'
		});

		document.querySelectorAll('nav button svg').forEach((svg) => {
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

		document.querySelectorAll('nav.mobile a').forEach((btn) => {
			let split = SplitText.create(btn, {
				type: 'chars'
			});

			btn.addEventListener('mouseenter', () => {
				gsap.to(split.chars, {
					color: '#0f16f0',
					duration: 0.5,
					ease: 'power3',
					stagger: 0.04
				});
			});

			btn.addEventListener('mouseleave', () => {
				gsap.to(split.chars, {
					color: 'black',
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

<nav class="geist-mono mobile text-2xl">
	<button class="fixed right-[3%] top-[1%]" onclick={() => (open = false)} aria-label="close"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 384 512"
			width="6vh"
			height="6vh"
			fill="white"
			><path
				d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
			/></svg
		></button
	>

	<div class="link-list">
		<a id="btnhome" href="#intro" onclick={() => (open = false)}>Home</a>
		<a id="btnabout" href="#about" onclick={() => (open = false)}>About</a>
		<a id="btnprojects" href="#projects" onclick={() => (open = false)}>Projects</a>
		<a id="btnresume" href="#resume" onclick={() => (open = false)}>Resume</a>
		<a id="btncontact" href="#contact" onclick={() => (open = false)}>Contact</a>
	</div>
</nav>

<style>
	nav.mobile {
		visibility: visible;
		position: fixed;
		z-index: 101;
		text-align: center;
		width: 100vw;
	}

    .link-list {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 40vw;
		height: fit-content;
		left: 30vw;
        top: 1vh;
        gap: 2vh;
        padding: 2vh 0;
        background: white;
        border-radius: 20px;
		color: black;
    }
</style>
