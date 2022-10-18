<div class="container">
	<div class="inner">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.inner {
		max-width: var(--content-width);
		margin: 0 var(--spacing-64);
		width: 100%;
	}
</style>
