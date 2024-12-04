<script>
	import { fade } from 'svelte/transition';

	let { title, githubLink, projectLink, splash, index, delayFactor = 0 } = $props();
</script>

<article
	in:fade|global={{ delay: 1000 * index + 1000 * delayFactor + 1000, duration: 2000 }}
	class="m-2 flex max-w-[48.5vw] flex-col rounded-lg border-4 border-black text-center p-2"
>
	<h1 class="underline mb-5">{title}</h1>

	<div class="relative">
		<img src={splash} alt={title} class="m-auto w-full rounded-md" />
		<div
			class="absolute bottom-0 flex h-full w-full flex-col justify-center opacity-0 hover:opacity-100 p-5 rounded-lg border-0 font-bold hover:z-10 bg-center bg-black text-white bg-opacity-50"
		>
			<a href={githubLink} target="_blank">Github Repository</a>
			<a href={projectLink} target="_blank">Live Site</a>
		</div>
	</div>
</article>

<style>
	/* img {
		width: 30%;
	} */
	a:hover {
		color: gray;
	}
</style>
