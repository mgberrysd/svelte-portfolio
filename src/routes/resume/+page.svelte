<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 1000 }} class="w-full text-center text-2xl geist">
	<h2>Mike Berry</h2>
	<p>Full Stack Web Developer</p>
	<embed
		src="assets/documents/Resume.pdf"
		class="m-auto pt-5 w-full lg:w-[70%] h-[80vh]"
		in:fade={{ delay: 1000, duration: 1000 }}
	/>
</div>
