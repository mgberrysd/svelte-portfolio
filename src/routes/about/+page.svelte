<script lang="ts">
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
</script>

<section class="m-auto w-[75vw] space-y-10 text-justify text-xl geist">
	<img in:fade={{ duration: 1000 }} src="{base}/assets/images/test_image.jpg" alt="me" class="m-auto rounded-full" />
	<p in:fade={{ delay: 1000, duration: 1000 }}>
		I am currently working as an independent Full Stack web developer. I have worked with clients in
		a diverse range of industries to provide them with both modern and accessible full stack
		applications. As a developer I have project experience working with HTML, CSS,
		JavaScript/Typescript, Node.js, Express.js, React, Svelte, MySQL, MongoDB, various AWS products and a
		number of CSS frameworks. Every project that I have worked on has provided opportunities to
		further hone these skills and learn new ones in pursuit of better development and final
		products.
	</p>
	<p in:fade={{ delay: 2000, duration: 1000 }}>
		My education was not originally in software development or computer science at all, but rather, in mechanical
		engineering. As a mechanical engineer I earned a MSME with an emphasis in thermofluids. I have
		several years of research experience devising and conducting tests for NASA as part of their
		spacecraft fire safety programs. I conducted novel self-directed research with infrared cameras,
		infrared thermography, and other optical techniques. Throughout my research I used MATLAB
		extensively as a scripting language for data and image analysis and control systems programming.
		My experience and education has taught me to be a strong analytical problem solver and I am
		always open and excited to learn new languages, technologies, and skills.
	</p>
</section>
