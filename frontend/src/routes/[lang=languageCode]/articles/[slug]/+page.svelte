<script lang="ts">
	import Column from '$components/layout/Column.svelte';
	import Container from '$components/layout/Container.svelte';
	import Row from '$components/layout/Row.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	let { post } = data;
	let { title, body, publishDate } = post;
</script>

<div class="content">
	<Container>
		<Row alignItems="start">
			<Column cols="1 / span 1">
				{#if publishDate}
					<span class="publish-date">
						{new Date(publishDate).toDateString()}
					</span>
				{/if}
			</Column>
			<Column cols="2 /span 4">
				<h1>{title}</h1>

				<div class="prose">
					{@html body}
				</div>
			</Column>
		</Row>
	</Container>
</div>

<style lang="scss">
	.content {
		padding: var(--spacing-128) 0;
	}

	.prose {
		max-width: 80ch;
	}

</style>
