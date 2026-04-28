<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#resume',
				start: 'top 75%',
				toggleActions: 'play reverse restart reverse'
			}
		});

		tl.from(document.querySelector('#resume h1'), { scale: 0, duration: 0.75, ease: 'power4' }, 0.5);

		tl.from(document.querySelector('#resume embed'), { height: 0, duration: 1.25, ease: 'power4' }, 1.25);
	});
</script>

<section class="geist w-full text-center text-2xl flex flex-col items-center" id="resume">
	<h1 class="text-3xl font-bold">Resume</h1>
	<embed src="assets/documents/Resume.pdf" class="w-full pt-5 lg:w-[70%]" />
</section>

<style>
	embed {
		height: 80vh;
	}
</style>
