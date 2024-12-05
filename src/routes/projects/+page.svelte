<script lang="ts">
	import ProjectCard from './projectCard.svelte';
	import { fade } from 'svelte/transition';

	const pro = [
		{
			title: '3 Plus Management',
			project_description: 'A photo gallery site with a full featured CMS suite.',
			githubLink: 'https://github.com/falafelrapper/3plusmgmt',
			projectLink: 'http://3pm.zacharyroy.com/',
			splash: 'assets/images/3pm.jpg'
		},
		{
			title: 'SLO Stone Properties',
			project_description: 'A property management and application site with administrative tools.',
			githubLink: 'https://github.com/RCLobster/slo-stone-properties',
			projectLink: 'https://www.slostoneproperties.com/',
			splash: 'assets/images/slo-stone.jpg'
		}
	];
	const school = [
		{
			title: 'Mad Libs Generator',
			project_description: 'A Mad Libs generator with text to speech integration and social elements.',
			githubLink: 'https://github.com/RCLobster/team-M-s-project-3',
			projectLink: 'https://team-m-s-project-3.onrender.com/',
			splash: 'assets/images/madlibgen_home.png'
		},
		{
			title: 'Breaking Bread',
			project_description: 'A recipe sharing platform.',
			githubLink: 'https://github.com/falafelrapper/breaking-bread',
			projectLink: 'https://agile-cove-66310-81bc545fcfa7.herokuapp.com/',
			splash: 'assets/images/breaking-bread.jpg'
		},
		{
			title: 'The Prep Project',
			project_description: 'An interactive recipe recommender.',
			githubLink: 'https://github.com/3123MtOlympus/theprepproject',
			projectLink: 'https://3123mtolympus.github.io/theprepproject/',
			splash: 'assets/images/the-prep-project.png'
		}
	];
</script>

<div class="text-center text-xl geist">
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

	<section in:fade={{ delay: 1000 * pro.length + 500, duration: 1000 }}>
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
