<script lang="ts">
	import AnimatedStroke from './AnimatedStroke.svelte';

	export let supertext = '';
	export let title = '';
	export let stroke = false;
</script>

<div class="copy-block">
	{#if $$slots.image}
		<div class="image">
			<slot name="image" />
		</div>
	{/if}

	{#if stroke}
		<AnimatedStroke />
	{/if}

	<div class="upper">
		{#if supertext}
			<span class="supertext">{supertext}</span>
		{/if}

		{#if title}
			<h2 class="title">{title}</h2>
		{/if}
	</div>

	{#if $$slots.body}
		<div class="body">
			<slot name="body" />
		</div>
	{/if}

	{#if $$slots.footer}
		<div class="footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style lang="scss">
	.copy-block {
		color: var(--text-color);
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
	}

	.image :global(img) {
		display: block;
		object-fit: cover;
	}

	.upper {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-16);
		position: relative;
	}

	.title {
		font-size: var(--text-lg);
		margin: 0;
	}
</style>
