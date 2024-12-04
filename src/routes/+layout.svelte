<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	// export const prerender = true;
	let { children } = $props();
</script>

<nav class="mb-10 text-lg flex items-stretch justify-around w-[100vw] p-[1%] bg-black text-white font-mono">
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
