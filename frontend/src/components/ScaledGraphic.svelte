<script lang="ts">
	export let width = 0;
	// export let height = 300;
	// $: ratio = width / height;

	let containerWidth = 0;
	$: scale = containerWidth / width;
</script>

<div class="container" style:transform={`scale(${scale})`} bind:clientWidth={containerWidth}>
	<slot />
</div>

<style>
	.container {
		width: 100%;
	}
</style>
