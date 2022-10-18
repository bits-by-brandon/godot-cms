<script lang="ts">
	import Container from '$components/layout/Container.svelte';
	export let theme = 'dark';
</script>

<section class={theme}>
	<Container>
		<slot />
	</Container>
</section>

<style>
	section {
		width: 100%;
		padding: var(--spacing-128) 0;
		border-bottom: 1px dashed var(--blue-700);
	}

	.dark {
		background: var(--background-color-dark);
	}

	.light {
		--text-color: var(--text-color-alt);
		background: var(--background-color-light);
	}

	.white {
		--text-color: var(--text-color-alt);
		--section-stroke-color: var(--text-color-alt);
		background: var(--background-color-white);
	}
</style>
