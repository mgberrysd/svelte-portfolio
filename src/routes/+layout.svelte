<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="mb-10 text-lg flex items-stretch justify-around w-[100vw] p-[1%] bg-black text-white font-mono">
	<a href="/">Home</a>
	<a href="/about">About Me</a>
	<a href="/projects">Projects</a>
	<a href="/resume">Resume</a>
	<a href="/contact">Contact</a>
</nav>

{@render children()}

<style>
	nav a:hover {
		color: gray;
	}
</style>
