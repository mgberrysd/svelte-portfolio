<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 1000 }} class="text-center text-3xl">
	<h2>Mike Berry</h2>
	<p in:fade={{delay:1000, duration: 1500 }}>Full Stack Web Developer</p>
</div>
