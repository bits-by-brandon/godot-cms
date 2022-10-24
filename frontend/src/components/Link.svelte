<script lang="ts">
	import { locale } from 'svelte-intl-precompile';
	import { base } from '$app/paths';

	export let href = '';
	export let appearance: 'button' | 'link' | 'inline' | 'raw' = 'inline';
	$: isButton = appearance === 'button';
	$: isLink = appearance === 'link';
	$: isInline = appearance === 'inline';
	$: stripped_href = href.startsWith('/') ? href.slice(1) : href;
	$: anchor = `${base}/${$locale}/${stripped_href}`;
</script>

<a class={$$props.class} class:isButton class:isLink class:isInline data-sveltekit-prefetch href={anchor}>
	<slot />
</a>

<style lang="scss">
	.isButton {
		display: inline-block;
		padding: var(--spacing-12) var(--spacing-16);
		color: var(--neutral-100);
		background: var(--button-primary-background);
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		box-shadow: 0 0 8px var(--button-primary-background);
		font-size: var(--text-sm);
		font-weight: bold;
		transition: filter 100ms ease-in-out;

		&:hover {
			text-decoration: none;
			filter: brightness(120%);
		}
	}

	.isInline {
		color: var(--link-primary-color);
	}

	.isLink {
		color: var(--link-primary-color);
		position: relative;

		&:after {
			content: '';
			display: block;
			position: absolute;
			height: 6px;
			width: 6px;
			border-right: 2px solid var(--secondary-color);
			border-bottom: 2px solid var(--secondary-color);
			top: 50%;
			right: -14px;
			transform: translate(0, -50%) rotate(-45deg);
			transition: transform 100ms ease-in-out;
		}

		&:hover:after {
			transform: translate(6px, -50%) rotate(-45deg);
		}
	}
</style>
