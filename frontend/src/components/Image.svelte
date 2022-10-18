<script lang="ts">
	import IntersectionObserver from '$components/util/IntersectionObserver.svelte';

	export let src: string;
	export let alt = '';
	export let bordered = false;
	export let animate = false;

	let isIntersecting = false;
	let imageEl;
</script>

{#if animate}
	<IntersectionObserver element={imageEl} bind:isIntersecting threshold={1} rootMargin="100px" once>
		<img
			class="animate"
			loading="lazy"
			{src}
			{alt}
			class:bordered
			class:isIntersecting
			bind:this={imageEl}
		/>
	</IntersectionObserver>
{:else}
	<img class:bordered loading="lazy" {src} {alt} />
{/if}

<style lang="scss">
	img {
		display: block;
		width: 100%;
	}

	.bordered {
		border: 2px solid var(--image-border-color);
	}

	.animate {
		opacity: 0;
		transform: translateY(20px);
		transition-delay: 400ms;
		transition: all 300ms cubic-bezier(0, 0, 0, 1);

		&.isIntersecting {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
