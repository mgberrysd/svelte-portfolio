<script>
	import ProjectCard from './projectCard.svelte';
	import { fade } from 'svelte/transition';

	const pro = [
		{
			title: '3 Plus Management',
			githubLink: 'https://github.com/falafelrapper/3plusmgmt',
			projectLink: 'http://3pm.zacharyroy.com/',
			splash: './assets/images/3pm.png'
		},
		{
			title: 'SLO Stone Properties',
			githubLink: 'https://github.com/RCLobster/slo-stone-properties',
			projectLink: 'https://www.slostoneproperties.com/',
			splash: './assets/images/slo-stone.png'
		}
	];
	const school = [
		{
			title: 'Mad Libs Generator',
			githubLink: 'https://github.com/RCLobster/team-M-s-project-3',
			projectLink: 'https://team-m-s-project-3.onrender.com/',
			splash: './assets/images/madlibgen_home.png'
		},
		{
			title: 'Breaking Bread',
			githubLink: 'https://github.com/falafelrapper/breaking-bread',
			projectLink: 'https://agile-cove-66310-81bc545fcfa7.herokuapp.com/',
			splash: './assets/images/breaking-bread.png'
		},
		{
			title: 'The Prep Project',
			githubLink: 'https://github.com/3123MtOlympus/theprepproject',
			projectLink: 'https://3123mtolympus.github.io/theprepproject/',
			splash: './assets/images/the-prep-project.png'
		}
	];
</script>

<div class="text-center text-xl">
	<section in:fade={{ duration: 1000 }} class="mb-5">
		<div class="mb-5">
			<h1 class="text-3xl font-bold">Professional Projects</h1>
			<p>Projects that I have worked on in a professional capacity.</p>
			<p class="text-sm">
				Note: many of these repositories are private, contact me for more information.
			</p>
		</div>

		<div class="flex basis-1/2 flex-wrap">
			{#each pro as project, index}
				<ProjectCard {...project} {index} />
			{/each}
		</div>
	</section>

	<section in:fade={{ delay: 1000 * pro.length + 500, duration: 2000 }}>
		<div class="mb-5">
			<h2 class="text-2xl font-bold">School and Learning Projects</h2>
			<p>Group projects undertaken while learning web development.</p>
		</div>

		<div class="flex flex-wrap">
			{#each school as project, index}
				<ProjectCard {...project} {index} delayFactor={pro.length} />
			{/each}
		</div>
	</section>
</div>
