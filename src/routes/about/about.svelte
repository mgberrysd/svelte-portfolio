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
			{ scale: 0, duration: 0.75, ease: ' power4.out' },
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
	<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
		><path
			d="M 39.79777,10.720354 24.825311,2.0883884 4.9716865,13.564042 5,36.544012 24.884153,48 44.910901,36.509275 l 10e-7,-22.790938 C 44.7191,13.538644 44.527297,13.35895 44.335495,13.179257 l -10.686935,6.142814 -8.77175,-4.951427 -9.207265,5.201065 -0.147619,0.147233 v 10.71901 l 9.362227,5.411673 9.312762,-5.487802 v -2.972865 l 3.925048,-2.269549 v 7.469068 l -13.23781,7.633691 -13.136564,-7.633691 -0.02515,-15.041315 13.235105,-7.6607411 8.799325,5.1589431 6.040901,-3.594257"
			fill="#fff"
		/></svg
	>
	<h1 class="text-3xl font-bold">About Me</h1>
	<img src="assets/images/test_image.jpg" alt="me" class="m-auto rounded-full" />
	<p>
		I am currently working as a software engineer. I have worked with clients in a diverse range of
		industries to provide them with both modern and accessible full stack applications. As a
		engineer I have project experience working with HTML, CSS, JavaScript/Typescript, Node.js,
		Express.js, React, Svelte, GSAP, MySQL, MongoDB, various AWS products and a number of CSS
		frameworks. Every project that I have worked on has provided opportunities to further hone these
		skills and learn new ones in pursuit of better development and final products.
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
