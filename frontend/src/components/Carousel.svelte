<script lang="ts">
	import AnimatedStroke from './AnimatedStroke.svelte';

	export let supertext = '';
	export let title = '';
</script>

<div class="carousel">
	<AnimatedStroke />
	{#if supertext}
		<span class="supertext">
			{supertext}
		</span>
	{/if}
	{#if title}
		<h2>{title}</h2>
	{/if}
	<div class="items">
		<slot />
	</div>
	{#if $$slots.footer}
		<div class="footer">
			<slot name="footer" />
		</div>
	{/if}
</div>

<style lang="scss">
	.carousel {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-24);
	}

	h2 {
		color: var(--text-color);
		margin: 0;
	}

	.items {
		width: 100%;
		margin-top: var(--spacing-32);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-flow: row;
		gap: var(--column-gap);
	}

	.footer {
		margin-top: var(--spacing-24);
	}
</style>
