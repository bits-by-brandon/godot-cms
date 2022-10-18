<script lang="ts">
	const sponsors = [
		{
			name: 'Gamblify',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/gamblify.png'
		},
		{
			name: 'Spliffcode',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/spiffcode.png'
		},
		{
			name: 'Affray Interactive',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/affray-interactive.png'
		},
		{
			name: 'Asifa Hollywood',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/asifa-hollywood.png'
		},
		{
			name: 'Playful Studios',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/playful-studios.png'
		},
		{
			name: 'Robot Gentlemen',
			src: 'https://godotengine.org/themes/godotengine/assets/home/sponsors/robot-gentleman.png'
		}
	];
</script>

<div class="sponsors">
	<h2>Sponsors</h2>
	<div class="sponsor-grid">
		{#each sponsors as sponsor}
			<div class="sponsor">
				<img src={sponsor.src} alt={sponsor.name} />
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		color: var(--text-color);
	}

	.sponsor-grid {
		gap: 20px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	.sponsor {
		width: 20%;
		max-width: 250px;
		max-height: 200px;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
