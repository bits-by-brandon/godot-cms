<script lang="ts">
	import logo from '$assets/images/godot_logo.svg';
	import Link from '$components/Link.svelte';
	import Container from '$components/layout/Container.svelte';
</script>

<header>
	<Container>
		<div class="outer">
			<nav>
				<div class="logo">
					<Link href="/">
						<img alt="Godot Logo" src={logo} />
					</Link>
				</div>
				<ul class="parent-list">
					<li class="parent-item">
						<span class="parent-item-text">Why Godot?</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/features">Features</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Showcase</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Creating apps</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Godot for education</Link>
							</li>
						</ul>
					</li>

					<li class="parent-item">
						<span class="parent-item-text">Learn</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/features">Docs</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Tutorials</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Godot for education</Link>
							</li>
						</ul>
					</li>

					<li class="parent-item">
						<span class="parent-item-text">Contribute</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/features">Donate</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Contribute code</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Improve the docs</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Report</Link>
							</li>
						</ul>
					</li>

					<li class="parent-item">
						<span class="parent-item-text">News & Community</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/news">News</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Community channels</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Local groups</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Events</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Q & A</Link>
							</li>
						</ul>
					</li>

					<li class="parent-item">
						<span class="parent-item-text">About</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/features">Contact</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Code of Conduct</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Privacy</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Governance</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Teams</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">License</Link>
							</li>
						</ul>
					</li>

					<li class="parent-item">
						<span class="parent-item-text">Resources</span>
						<ul class="submenu">
							<li class="submenu-item">
								<Link href="/features">News</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Asset marketplace</Link>
							</li>
							<li class="submenu-item">
								<Link href="/features">Press kit</Link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<Link appearance="button" href="/download">Try for free</Link>
		</div>
	</Container>
</header>

<style lang="scss">
	header {
		background: var(--header-background-color);
		width: 100%;
		z-index: 10;
		border-bottom: 1px solid var(--header-border-color);
	}

	.outer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column-width);
		--background: rgba(255, 255, 255, 0.7);
	}

	.logo {
		margin-right: var(--spacing-64);
		height: 38px;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
		z-index: 1;
	}

	li {
		position: relative;
	}

	.parent-item {
		position: relative;
		font-size: var(--text-sm);
		color: var(--text-color);
		padding: var(--spacing-16) var(--spacing-24);
		cursor: context-menu;

		&:focus-within,
		&:hover {
			outline: none;
			background: var(--header-border-color);
			color: var(--secondary-color);
		}
	}

	.submenu {
		position: absolute;
		background: var(--header-background-color);
		padding: var(--spacing-24);
		border: var(--stroke-thickness) solid var(--section-stroke-color);
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: var(--spacing-12);
		top: 50px;
		left: 0;
		opacity: 0;
		transform: translateY(-10px);
		pointer-events: none;

		&:focus-within,
		&:hover,
		.parent-item:focus &,
		.parent-item:hover & {
			opacity: 1;
			transform: translateY(0);
			pointer-events: all;
			transition: opacity 200ms linear, transform 200ms cubic-bezier(0, 0.53, 0.22, 0.99);
		}
	}

	.submenu-item {
		text-align: left;
		white-space: nowrap;
	}
</style>
