<script lang="ts">
	import Container from '$components/layout/Container.svelte';
	import Column from '$components/layout/Column.svelte';
	import Row from '$components/layout/Row.svelte';
	import backgroundImage from "$assets/images/tail-quest-defense-screenshot.png";

	export let supertext = '';
	export let title = '';
</script>

<div class="hero">
	{#if backgroundImage}
		<img src={backgroundImage} alt="" />
	{/if}

	<Container>
		<Row>
			<Column cols="1 / span 2">
				<div class="upper">
					{#if supertext}
						<span class="supertext">{supertext}</span>
					{/if}
					{#if title}
						<h1 class="text-xl">{title}</h1>
					{/if}
				</div>
			</Column>
		</Row>
	</Container>

	<Container>
		<Row>
			<Column cols="1 / span 2">
				<div class="lower">
					<div class="stroke" />

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
			</Column>
		</Row>
	</Container>
</div>

<style>
	.hero {
    background: var(--neutral-800);
		color: var(--text-color);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--spacing-128) 0;
		gap: var(--spacing-24);
		width: 100%;
		overflow: hidden;
	}

	img {
		display: block;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
		opacity: 0.5;
	}

	.upper {
		position: relative;
	}

	.lower {
		display: flex;
		flex-direction: column;
		position: relative;
		padding-left: var(--spacing-24);
	}

	.stroke {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--stroke-thickness);
		background: var(--section-stroke-color);
	}

	.supertext {
		color: var(--heading-color);
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		font-weight: bold;
	}
</style>
