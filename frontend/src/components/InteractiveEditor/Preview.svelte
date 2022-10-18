<script>
	import godot from './svgs/godot.svg';
	import soundwaves from './svgs/sound-waves.svg';

	export let parentNodeActive = false;
	export let spriteNodeActive = false;
	export let audioNodeActive = false;
	export let animationNodeActive = false;
</script>

<div class="preview" class:animating={animationNodeActive}>
	<div class="placeholder" class:visible={!spriteNodeActive && parentNodeActive} />
	<img class="sprite" src={godot} class:visible={spriteNodeActive && parentNodeActive} alt="" />
	<img
		class="soundwaves"
		src={soundwaves}
		class:visible={audioNodeActive && parentNodeActive}
		alt=""
	/>
</div>

<style lang="scss">
	.preview {
		position: absolute;
		top: 220px;
		left: 420px;

		&.animating {
			animation: move 3s infinite;
		}
	}

	.placeholder {
		width: 100px;
		height: 100px;
		position: absolute;
		top: -50px;
		left: -50px;
		opacity: 0;
		transition: opacity 100ms linear;

		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		&:before {
			background-color: rgb(255, 0, 0);
			width: 100px;
			height: 1px;
		}
		&:after {
			background-color: rgb(0, 255, 0);
			width: 1px;
			height: 100px;
		}

		&.visible {
			opacity: 1;
		}
	}

	img {
		display: block;
		position: absolute;
		opacity: 0;
		transition: opacity 100ms linear;
	}

	.sprite {
		position: absolute;
		width: 127px;
		left: -64px;
		top: -64px;

		&.visible {
			opacity: 1;
		}
	}

	.soundwaves {
		width: 82px;
		left: -140px;
		top: -10px;

		&.visible {
			animation: pulse 1s infinite;
		}
	}

	@keyframes pulse {
		20% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		80% {
			opacity: 0;
		}
	}

	@keyframes move {
		0% {
			transform: translate(0, 0);
		}
		33% {
			transform: translate(-50px, 0);
		}
		66% {
			transform: translate(50px, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
