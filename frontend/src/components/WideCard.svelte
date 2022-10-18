<div class="wide-card">
	<div class="left">
		<slot name="left" />
	</div>
	<div class="right">
		<slot name="right" />
	</div>
</div>

<style lang="scss">
	.wide-card {
		width: 100%;
		background: var(--card-background-color);
		color: var(--card-text-color);
		padding: var(--spacing-64);
		display: grid;
		gap: var(--column-gap);
		grid-template-columns: 1fr 1fr;
		box-shadow: 0 6px 24px var(--accent-color);
	}

	.right {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-8);
	}
</style>
