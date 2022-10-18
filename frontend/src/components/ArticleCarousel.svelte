<script>
	import ArticleCard from './ArticleCard.svelte';
	import Carousel from './Carousel.svelte';

	export let supertext = '';
	export let title = '';
	export let posts = [];

	$: sorted = posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
</script>

<Carousel {supertext} {title}>
	{#each posts as post (post.slug)}
		<ArticleCard {...post} />
	{/each}
</Carousel>
