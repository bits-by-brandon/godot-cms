<script>
	import Link from '$components/Link.svelte';

	export let title = '';
	export let slug = '';
	export let image = '';
	export let developer = ''
	// platforms: string[]
</script>

<Link type="raw" class="showcase-card" href={`/showcase#${slug}`}>
	{#if image}
		<img class="showcase-card__image" src="{image}" alt="{title}">
	{/if}

	<div class="meta">
		{#if title}
			<h3 class="title text-base">{title}</h3>
		{/if}
		{#if developer}
			<p class="text-sm">{developer}</p>
		{/if}
	</div>
</Link>

<style lang="scss">
	:global(.showcase-card) {
		position: relative;
		color: var(--text-color);
		display: flex;
		flex-direction: column;
		transition: transform 100ms ease-in-out;
	}

	.showcase-card__image {
		aspect-ratio: 3/2;
		width: 100%;
		object-fit: cover;
		margin-bottom: var(--spacing-16);
	}

	.meta {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: var(--spacing-8)
	}

	.title {
		margin: 0;
	}
</style>
