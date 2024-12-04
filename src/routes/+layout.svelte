<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="mb-10">
	<a href="/">Home</a>
	<a href="/about">About Me</a>
	<a href="/projects">Projects</a>
	<a href="/resume">Resume</a>
	<a href="/contact">Contact</a>
</nav>

{@render children()}

<style>
	nav {
		font-size: large;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100vw;
		padding: 1% 0 1% 0;
		background-color: black;
		color: white;
	}
	nav a:hover {
		color: gray;
	}
</style>
