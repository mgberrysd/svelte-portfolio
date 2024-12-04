<script lang="ts">
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';

</script>

<section in:fade={{ duration: 2000 }} class="text-center text-xl space-y-10 w-[75vw] m-auto">
    <img src="{base}/assets/images/test_image.jpg" alt="me" class="rounded-full m-auto"/>
	<p>
		Newly minted full stack web developer. Front end fundementals in HTML, CSS, and
		JavaScript/TypeScript. Expereience with Bootstrap, Handlebars.js, and ReactJS. Back end
		experience with NodeJS, Express, Apollo/graphQL, MySQL/Sequelize, and MongoDB/Mongoose. Check
		out my projects page to see some of the projects I have worked on.
	</p>
	<p>
		My background prior to this in Mechanical Engineering where I conducted spacecraft fire safety
		research and learned to code with MATLAB. I am always eager and willing to learn!
	</p>
</section>
