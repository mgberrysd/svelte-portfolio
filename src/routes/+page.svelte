<script lang="ts">
	import About from './about/about.svelte';
	import Contact from './contact/contact.svelte';
	import Projects from './projects/projects.svelte';
	import Resume from './resume/resume.svelte';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { SplitText } from 'gsap/SplitText';

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

	onMount(() => {
		ScrollSmoother.create({
			smooth: 0.75,
			effects: true,
			smoothTouch: 0.1
		});

		gsap.to('#smooth-content', {
			scrollTrigger: {
				trigger: '#smooth-content',
				start: 'top top',
				scrub: 1
			},
			backgroundColor: '#0f16f0'
		});

		gsap.to(document.querySelector('nav'), {
			scrollTrigger: {
				trigger: '#smooth-content',
				start: 'top top',
				scrub: 1
			},
			backgroundColor: '#0f16f0'
		});

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 75%',
				toggleActions: 'play none restart none'
			}
		});

		let splitH1 = SplitText.create(document.querySelector('#intro h1'), {
			type: 'chars'
		});

		splitH1.chars.forEach((char, i) => {
			tl.from(
				char,
				{
					autoAlpha: 0,
					y: 25 * (i % 2 === 0 ? 1 : -1),
					duration: 1,
					ease: 'power4.inOut'
				},
				0.5 + i * 0.04
			);

			tl.to(char, { color: '#0f16f0', duration: 2, repeat: -1, yoyo: true }, 2 + i * 0.25);
		});

		let splitP = SplitText.create(document.querySelector('#intro p'), {
			type: 'chars'
		});

		tl.from(
			splitP.chars,
			{ autoAlpha: 0, filter: 'blur(5px)', duration: 0.75, ease: ' power4.out', stagger: 0.01 },
			1.5
		);
	});
</script>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<section class="geist flex flex-col justify-center text-center text-3xl" id="intro">
			<h1 class="text-3xl font-bold">Mike Berry</h1>
			<p class="text-2xl">Full Stack Web Developer</p>
		</section>

		<About />
		<Projects />
		<Resume />
		<Contact />
	</div>
</div>
