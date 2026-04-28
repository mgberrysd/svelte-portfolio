<script lang="ts">
	import ProjectCard from './projectCard.svelte';

	const pro = [
		{
			title: 'LuckyKat',
			project_description: 'Interactive pitch deck and presenation creation platform.',
			githubLink: '',
			projectLink: 'https://www.luckykat.app/',
			splash: 'assets/images/luckykat.jpg'
		},
		{
			title: '3 Plus Management',
			project_description: 'A photo gallery site with a full featured CMS suite.',
			githubLink: '',
			projectLink: 'https://www.3plusmgmt.com/',
			splash: 'assets/images/3pm.jpg'
		},
		{
			title: 'SLO Stone Properties',
			project_description: 'A property management and application site with administrative tools.',
			githubLink: '',
			projectLink: 'https://www.slostoneproperties.com/',
			splash: 'assets/images/slo-stone.jpg'
		}
	];

	import { onMount } from 'svelte';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	gsap.registerPlugin(ScrollTrigger, SplitText);

	onMount(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#projects',
				start: 'top 75%',
				end: 'bottom 50%',
				toggleActions: 'play none restart none'
			}
		});

		let projectsText = document.querySelector('#projectsText');

		if (projectsText?.children)
			Array.from(projectsText?.children).forEach((child, i) => {
				tl.from(
					child,
					{ autoAlpha: 0, filter: 'blur(5px)', x: 50, duration: 0.75, ease: ' power4.out' },
					0.5 + i * 0.1
				);
			});

		let projectsArray = document.querySelector('#projectsArray');

		projectsArray?.addEventListener('mouseenter', () => {
			tl.pause();
		});

		projectsArray?.addEventListener('mouseleave', () => {
			tl.resume();
		});

		console.log(projectsArray?.childElementCount);
		if (projectsArray?.children)
			Array.from(projectsArray?.children).forEach((child, i) => {
				tl.set(child, { position: 'absolute' }, 0);
				tl.from(
					child,
					{
						autoAlpha: 0,
						duration: 1,
						repeat: -1,
						repeatDelay: projectsArray?.childElementCount * 4 - 1
					},
					i * 4
				);

				tl.fromTo(
					child,
					{ autoAlpha: 1 },
					{
						autoAlpha: 0,
						duration: 1,
						repeat: -1,
						repeatDelay: projectsArray?.childElementCount * 4 - 1
					},
					2 + i * 4
				);
			});
	});
</script>

<div class="geist text-center text-xl" id="projects">
	<section class="mb-5">
		<div class="mb-5" id="projectsText">
			<h1 class="text-3xl font-bold">Projects</h1>
			<p>Projects that I have worked on in a professional capacity.</p>
			<p class="text-sm">
				As these are all active projects, please contact me for examples of code I worked on.
			</p>
		</div>

		<div
			class="m-5 flex flex-col items-center rounded-lg border-t-4 border-white"
			id="projectsArray"
		>
			{#each pro as project}
				<ProjectCard {...project} />
			{/each}
		</div>
	</section>
</div>
