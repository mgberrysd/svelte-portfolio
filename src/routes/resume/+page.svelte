<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 2000 }} class="w-full text-center text-2xl">
	<h2>Mike Berry</h2>
	<p>Full Stack Web Developer</p>
	<embed
		src="./assets/documents/Resume.pdf"
		width="70%"
		height="750"
		class="m-auto pt-5"
		in:fade={{ delay: 2000, duration: 2000 }}
	/>
</div>
