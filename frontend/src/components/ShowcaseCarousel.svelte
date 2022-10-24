<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import Carousel from './Carousel.svelte';
	import ShowcaseCard from '$components/ShowcaseCard.svelte';
	import Link from './Link.svelte';

	export let supertext = 'Showcase';
	export let title = "See what's already been build with Godot";
	export let showcaseTitles: ShowcaseTitle[] = [];
</script>

<Carousel {supertext} {title}>
	{#each showcaseTitles as showcaseTitle (showcaseTitle.title)}
		<ShowcaseCard {...showcaseTitle} />
	{/each}

	<Link appearance="link" slot="footer">
		{$t('global.see_more_creations')}
	</Link>
</Carousel>
