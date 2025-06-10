<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	let { children } = $props();
</script>

<nav
	class="mb-10 flex w-[100vw] items-stretch justify-around bg-black p-[1%] geist-mono text-lg text-white"
>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About Me</a>
	<a href="{base}/projects">Projects</a>
	<a href="{base}/resume">Resume</a>
	<a href="{base}/contact">Contact</a>
</nav>

	{@render children()}

<style>
	nav a:hover {
		color: gray;
	}
</style>
