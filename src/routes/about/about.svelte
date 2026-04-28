<script lang="ts">
	import { onMount, tick } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	gsap.registerPlugin(ScrollTrigger, SplitText);

	onMount(async () => {
		await tick();
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#about',
				start: 'top 75%',
				toggleActions: 'play reverse restart reverse'
			}
		});

		let splitH1 = SplitText.create(document.querySelector('#about h1'), {
			type: 'chars'
		});

		tl.from(
			splitH1.chars,
			{ autoAlpha: 0, x: 50, duration: 0.75, ease: ' power4.out', stagger: 0.02 },
			0.5
		);

		tl.from(
			document.querySelector('#about img'),
			{ scale: 0,  duration: 0.75, ease: ' power4.out',},
			1
		);

		let splitP = SplitText.create(document.querySelectorAll('#about p'), {
			type: 'lines'
		});

		splitP.lines.forEach((line, i) => {
			tl.from(
				line,
				{
					autoAlpha: 0,
					x: 1000 * (i % 2 === 0 ? 1 : -1),
					duration: 1,
					ease: 'power4.inOut'
				},
				1.25 + i * 0.04
			);
		});
	});
</script>

<section
	class="geist m-auto flex w-[75vw] flex-col items-center space-y-10 text-justify text-xl"
	id="about"
>
	<h1 class="text-3xl font-bold">About Me</h1>
	<img src="assets/images/test_image.jpg" alt="me" class="m-auto rounded-full" />
	<p>
		I am currently working as an independent Full Stack web developer. I have worked with clients in
		a diverse range of industries to provide them with both modern and accessible full stack
		applications. As a developer I have project experience working with HTML, CSS,
		JavaScript/Typescript, Node.js, Express.js, React, Svelte, GSAP, MySQL, MongoDB, various AWS
		products and a number of CSS frameworks. Every project that I have worked on has provided
		opportunities to further hone these skills and learn new ones in pursuit of better development
		and final products.
	</p>
	<p>
		My education was not originally in software development or computer science at all, but rather,
		in mechanical engineering. As a mechanical engineer I earned a MSME with an emphasis in
		thermofluids. I have several years of research experience devising and conducting tests for NASA
		as part of their spacecraft fire safety programs. I conducted novel self-directed research with
		infrared cameras, infrared thermography, and other optical techniques. Throughout my research I
		used MATLAB extensively as a scripting language for data and image analysis and control systems
		programming. My experience and education has taught me to be a strong analytical problem solver
		and I am always open and excited to learn new languages, technologies, and skills.
	</p>
</section>
