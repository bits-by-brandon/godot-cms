<script>
	import Link from '$components/Link.svelte';

	export let title = '';
	export let slug = '';
	export let snippet = '';
	export let publishDate = '';
	$: date = new Date(publishDate).toLocaleDateString(undefined, {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<Link type="raw" class="article-card" href={`/articles/${slug}`}>
	<div class="meta">
		{#if date}
			<p class="date text-sm">{date}</p>
		{/if}
	</div>

	{#if title}
		<h3>{title}</h3>
	{/if}

	{#if snippet}
		<p class="snippet">{snippet}</p>
	{/if}
</Link>

<style lang="scss">
	:global(.article-card) {
		border: 2px solid var(--text-color);
		color: var(--text-color);
		padding: var(--spacing-24);
		display: flex;
		flex-direction: column;
		transition: transform 100ms ease-in-out;
		background: var(--blue-900);

		&:hover {
			transform: translateY(-4px);
			text-decoration: none;
		}
	}

	.meta {
		display: flex;
		flex-direction: row;
	}

	.snippet {
		max-height: 200px;
		display: block;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
	}
</style>
