<script>
	export let isActive = false;
	export let name = 'Node';
	export let x = 0;
	export let y = 0;
	export let activeColor = '#fff';
</script>

<div
	class="node"
	style:color={isActive ? activeColor : 'var(--neutral-500)'}
	style:left={`${x}px`}
	style:top={`${y}px`}
	class:isActive
	on:click
>
	<slot />
	<div class="name">{name}</div>
</div>

<style lang="scss">
	.node {
		width: 26px;
		height: 26px;
		position: absolute;
		cursor: pointer;
		transition: color 80ms linear;
	}

	.name {
		position: absolute;
		top: 8px;
		left: 30px;
		font-size: var(--text-sm);
		line-height: 1;
		color: var(--neutral-300);

		.isActive & {
			color: var(--neutral-200)
		}
	}
</style>
