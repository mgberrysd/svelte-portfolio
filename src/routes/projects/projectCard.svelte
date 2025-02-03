<script lang="ts">
	import { fade } from 'svelte/transition';

	let {
		title,
		project_description,
		githubLink = '',
		projectLink,
		splash,
		index,
		delayFactor = 0
	} = $props();
</script>

<article
	in:fade|global={{ delay: 1000 * index + 1000 * delayFactor + 1000, duration: 1000 }}
	class="xxl:w-[35vw] m-2 flex flex-col rounded-lg border-4 border-black p-2 text-center lg:max-w-[48.5vw]"
>
	<h1 class="geist-mono mb-5 underline">{title}</h1>

	<div class="geist relative">
		<img src={splash} alt={title} class="m-auto w-full rounded-md" />
		<div
			class="absolute bottom-0 flex h-full w-full flex-col justify-center rounded-lg border-0 bg-black bg-opacity-50 bg-center p-5 font-bold text-white opacity-0 hover:z-10 hover:opacity-100"
		>
			<p class="mb-10">{project_description}</p>
			<a href={projectLink} target="_blank">Live Site</a>
			{#if githubLink}
				<a href={githubLink} target="_blank">Github Repository</a>
			{/if}
		</div>
	</div>
</article>

<style>
	a:hover {
		color: gray;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		text-decoration: underline;
		text-underline-offset: auto;
	}
</style>
