<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	in:fade={{ delay: 500, duration: 1000 }}
	class="flex h-[75vh] flex-col justify-center text-center text-3xl geist"
>
	<h2 class="mb-5">Mike Berry</h2>
	<p in:fade={{ delay: 1500, duration: 1000 }} class="text-2xl">Full Stack Web Developer</p>
</div>
