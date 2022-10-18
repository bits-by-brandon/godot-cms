<script lang="ts">
	export let alignItems = 'center';
</script>

<div style:align-items={alignItems} class="row">
	<slot />
</div>

<style>
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: var(--column-gap);
		width: 100%;
	}
</style>
