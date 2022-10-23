<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';
	import Carousel from './Carousel.svelte';

	export let supertext = '';
	export let title = '';
	export let posts: Article[] = [];
</script>

<Carousel {supertext} {title}>
	{#each posts as post (post.slug)}
		<ArticleCard {...post} />
	{/each}
</Carousel>
