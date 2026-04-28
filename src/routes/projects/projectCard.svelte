<script lang="ts">
	let {
		title,
		project_description,
		githubLink = '',
		projectLink,
		splash,
	} = $props();
</script>

<article class="m-2 flex w-fit h-[75vh] flex-col p-2 text-center overflow-hidden">
	<h1 class="geist-mono mb-5 underline">{title}</h1>

	<div class="geist relative">
		<img src={splash} alt={title} class="m-auto w-full h-auto rounded-lg" />
		<div
			class="card absolute bottom-0 flex h-full w-full flex-col justify-center rounded-lg border-0 bg-black bg-opacity-50 bg-center p-5 font-bold text-white opacity-0"
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
	.card:hover {
		opacity: 100;
		z-index: 10;
		transition: all 0.5s;
	}

	a:hover {
		color: #f0e90f;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
		text-decoration: underline;
		text-underline-offset: auto;
	}
</style>
