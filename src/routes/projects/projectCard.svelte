<script lang="ts">
	import { fade } from 'svelte/transition';

	let { title, project_description, githubLink, projectLink, splash, index, delayFactor = 0 } = $props();

</script>

<article
	in:fade|global={{ delay: 1000 * index + 1000 * delayFactor + 1000, duration: 2000 }}
	class="m-2 flex lg:max-w-[48.5vw] flex-col rounded-lg border-4 border-black p-2 text-center"
>
	<h1 class="mb-5 underline font-mono">{title}</h1>

	<div class="relative">
		<img src={splash} alt={title} class="m-auto w-full rounded-md" />
		<div
			class="absolute bottom-0 flex h-full w-full flex-col justify-center rounded-lg border-0 bg-black bg-opacity-50 bg-center p-5 font-bold text-white opacity-0 hover:z-10 hover:opacity-100"
		>
		<p class="mb-10">{project_description}</p>
			<a href={projectLink} target="_blank">Live Site</a>
			<a href={githubLink} target="_blank">Github Repository</a>
		</div>
	</div>
</article>

<style>
	/* img {
		width: 30%;
	} */
	a:hover {
		color: gray;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		text-decoration: underline;
		text-underline-offset: auto;
	}
</style>
