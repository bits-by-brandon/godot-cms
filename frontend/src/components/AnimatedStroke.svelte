<script lang="ts">
	import IntersectionObserver from '$components/util/IntersectionObserver.svelte';
	export let width = 64;
	let isIntersecting = false;
	let strokeEl: HTMLElement;
</script>

<IntersectionObserver element={strokeEl} bind:isIntersecting>
	<div class="stroke" style:width={`${width}px`} bind:this={strokeEl} class:isIntersecting />
</IntersectionObserver>

<style lang="scss">
	.stroke {
		left: 0;
		top: 0;
		bottom: 0;
		height: var(--stroke-thickness);
		background: var(--section-stroke-color);
		transform-origin: left;
		transition: transform 800ms cubic-bezier(0, 0, 0, 1);
		transition-delay: 400ms;
		transform: scaleX(0);

		&.isIntersecting {
			transform: scaleX(1);
		}

		@media (prefers-reduced-motion) {
			transform: scaleX(1);
		}
	}
</style>
