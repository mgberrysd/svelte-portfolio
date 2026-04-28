<script lang="ts">
	import ProjectCard from './projectCard.svelte';

	const school = [
		{
			title: 'Mad Libs Generator',
			project_description:
				'A Mad Libs generator with text to speech integration and social elements.',
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

<div class="geist text-center text-xl" id="projects">

	<section>
		<div class="mb-5">
			<h2 class="text-2xl font-bold">School and Learning Projects</h2>
			<p>Group projects undertaken while learning web development.</p>
		</div>

		<div class="flex basis-1/2 flex-wrap justify-center">
			{#each school as project, index}
				<ProjectCard {...project} {index} delayFactor={0} />
			{/each}
		</div>
	</section>
</div>
