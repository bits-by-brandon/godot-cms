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
	<div class="cards">
		<slot />
	</div>
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

	.cards {
		width: 100%;
		margin-top: var(--spacing-32);
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-flow: row;
		grid-gap: var(--column-gap);
	}
</style>
