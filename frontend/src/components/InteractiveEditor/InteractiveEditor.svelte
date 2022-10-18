<script lang="ts">
	import IntersectionObserver from '$components/util/IntersectionObserver.svelte';
	import NodeIcon from '$components/NodeIcon.svelte';
	import sleep from '$lib/util/sleep';
	import Node from './Node.svelte';
	import Preview from './Preview.svelte';

	async function enableNodes() {
		await sleep(1500);
		parentNodeActive = true;
		await sleep(1200);
		spriteNodeActive = true;
		await sleep(1200);
		audioNodeActive = true;
		await sleep(1200);
		animationNodeActive = true;
	}

	let parentNodeActive = false;
	let spriteNodeActive = false;
	let audioNodeActive = false;
	let animationNodeActive = false;

	let isIntersecting = false;
	$: if (isIntersecting) enableNodes();
	let containerEl;
</script>

<IntersectionObserver
	element={containerEl}
	bind:isIntersecting
	threshold={1}
	rootMargin="100px"
	once
>
	<div class="interactiveEditor" class:isIntersecting bind:this={containerEl}>
		<!-- prettier-ignore -->
		<svg width="646" height="416" viewBox="0 0 646 416" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path class='frame' d="M1 1H645V415H1V1Z" stroke="white" stroke-width="2"/>
			<path class='node-panel' d="M16.3076 15.017H72.8541V27.0315H191.248V246.296H16.3076V15.017Z" stroke="white" stroke-width="2"/>
			<rect class='resource-panel' x="16" y="260.313" width="175" height="140.169" stroke="white" stroke-width="2"/>
			<path class='preview-panel' d="M207 15.017H267.901V28.9427H630V400.483H207V15.017Z" stroke="white" stroke-width="2"/>
		</svg>

		<!-- prettier-ignore -->
		<svg class="node-tree" class:isIntersecting width="65" height="137" viewBox="0 0 65 137" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M30.3363 0.000982854C29.3092 0.000982854 28.4823 0.828745 28.4823 1.85692V7.42465C28.4823 8.45283 29.3092 9.28049 30.3363 9.28049H32.1903V11.1182C31.9898 11.1245 31.7918 11.1634 31.6037 11.2332L27.8018 12.5018L26.5343 8.69584C26.4118 8.30888 26.1659 7.97281 25.8343 7.73911C25.5027 7.50541 25.1038 7.38698 24.6985 7.40195C24.4086 7.41252 24.1252 7.49105 23.8711 7.63124C23.617 7.77143 23.3993 7.96936 23.2355 8.20911C23.0717 8.44885 22.9665 8.72373 22.9282 9.01162C22.8899 9.29952 22.9195 9.59239 23.0149 9.8667L24.8687 15.4344C24.9457 15.6658 25.0674 15.8798 25.227 16.0641C25.3866 16.2484 25.5809 16.3993 25.7988 16.5084C26.0167 16.6175 26.254 16.6825 26.497 16.6997C26.74 16.717 26.984 16.6861 27.2151 16.6088L30.3365 15.5686V16.7031C30.3365 16.7788 30.3716 16.8442 30.3789 16.917L21.8913 22.5828C21.6844 22.716 21.506 22.8891 21.3665 23.0921C21.2271 23.295 21.1293 23.5237 21.0791 23.7649C21.0288 24.006 21.0271 24.2548 21.0738 24.4966C21.1206 24.7384 21.2149 24.9686 21.3514 25.1735C21.4879 25.3785 21.6638 25.5542 21.8688 25.6904C22.0738 25.8266 22.3039 25.9206 22.5456 25.9669C22.7873 26.0132 23.0357 26.0109 23.2765 25.9601C23.5173 25.9093 23.7456 25.811 23.948 25.671L33.3229 19.4146L36.0929 24.9568C36.2924 25.3567 36.6292 25.671 37.0416 25.8421C37.4541 26.0132 37.9143 26.0297 38.3378 25.8884L43.8997 24.0324C44.1374 23.9609 44.3583 23.8423 44.5493 23.6837C44.7404 23.5252 44.8977 23.3298 45.0119 23.1093C45.1262 22.8888 45.195 22.6475 45.2144 22.3998C45.2338 22.1521 45.2033 21.9031 45.1247 21.6675C45.0462 21.4318 44.9212 21.2143 44.7571 21.0279C44.5931 20.8415 44.3933 20.69 44.1697 20.5823C43.946 20.4746 43.7031 20.4129 43.4552 20.401C43.2073 20.389 42.9595 20.427 42.7266 20.5126L38.6892 21.8574L36.8824 18.2365C37.3938 17.9066 37.7514 17.36 37.7514 16.7031V14.8473H40.315L41.6548 17.5333C41.7623 17.7535 41.9124 17.9502 42.0964 18.1121C42.2803 18.2739 42.4944 18.3977 42.7264 18.4762C42.9584 18.5547 43.2036 18.5865 43.4479 18.5697C43.6922 18.5528 43.9308 18.4877 44.1498 18.3781C44.3688 18.2684 44.564 18.1164 44.724 17.9309C44.8841 17.7453 45.0058 17.5298 45.0822 17.2969C45.1586 17.064 45.1881 16.8183 45.1691 16.5739C45.1501 16.3295 45.083 16.0913 44.9715 15.873L43.1175 12.1613C42.9635 11.853 42.7268 11.5937 42.4339 11.4126C42.141 11.2314 41.8035 11.1354 41.4592 11.1354H35.8973V9.27961H37.7511C38.7782 9.27961 39.6051 8.4518 39.6051 7.42362V1.85587C39.6051 0.827722 38.7782 0 37.7511 0L30.3363 0.000982854ZM30.3363 3.71272H32.1903V7.42443H30.3363V3.71272Z" fill="#478CBF" />
			<path d="M0.942383 10.9527L8.01345 18.0237L15.0845 10.9527" stroke="#fff" stroke-width="2" />
			<path d="M8 27L8 48.5M29.5 124H8L8 86M8 86H29.5M8 86L8 48.5M8 48.5H29.5" stroke="#fff" stroke-width="2" />
		</svg>

		<div class="nodes" class:isIntersecting>
			<Node
				name="Player"
				x={42}
				y={42}
				activeColor="#478CBF"
				isActive={parentNodeActive}
				on:click={() => (parentNodeActive = !parentNodeActive)}
			>
				<NodeIcon name="KinematicBody2D" />
			</Node>

			<Node
				name="Sprite"
				x={60}
				y={76}
				activeColor="#F57389"
				isActive={spriteNodeActive}
				on:click={() => (spriteNodeActive = !spriteNodeActive)}
			>
				<NodeIcon name="Sprite" />
			</Node>

			<Node
				name="Sound"
				x={60}
				y={114}
				activeColor="#78E5F6"
				isActive={audioNodeActive}
				on:click={() => (audioNodeActive = !audioNodeActive)}
			>
				<NodeIcon name="AudioStreamPlayer" />
			</Node>

			<Node
				name="Animation"
				x={60}
				y={153}
				isActive={animationNodeActive}
				activeColor="#F6AA78"
				on:click={() => (animationNodeActive = !animationNodeActive)}
			>
				<NodeIcon name="AnimationTree" />
			</Node>
		</div>

		<Preview {parentNodeActive} {spriteNodeActive} {animationNodeActive} {audioNodeActive} />
	</div>
</IntersectionObserver>

<style lang="scss">
	.interactiveEditor {
		position: relative;
	}

	.frame,
	.node-panel,
	.resource-panel,
	.preview-panel {
		stroke-dasharray: var(--dash-length);
		stroke-dashoffset: var(--dash-length);
		transition: stroke-dashoffset 1000ms cubic-bezier(0.48, -0.02, 0.24, 1.03);

		.isIntersecting & {
			stroke-dashoffset: 0;
		}
	}

	.frame {
		--dash-length: 2118px;
	}

	.node-panel {
		--dash-length: 814px;
		transition-delay: 200ms;
	}

	.resource-panel {
		--dash-length: 632px;
		transition-delay: 300ms;
	}

	.preview-panel {
		--dash-length: 1618px;
		transition-delay: 400ms;
	}

	.node-tree {
		position: absolute;
		top: 42px;
		left: 22px;
		opacity: 0;
		transition: opacity 300ms linear;
		transition-delay: 400ms;

		.isIntersecting & {
			opacity: 1;
		}
	}

	.nodes {
		opacity: 0;
		transition: opacity 300ms linear;
		transition-delay: 400ms;

		.isIntersecting & {
			opacity: 1;
		}
	}
</style>
