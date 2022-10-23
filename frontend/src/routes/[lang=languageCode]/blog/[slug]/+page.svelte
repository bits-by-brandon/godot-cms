<script lang="ts">
	import type {PageData} from './$types';
	export let data: PageData;
	let {foo, slug} = data;
</script>

<h1>Blog post for {slug}</h1>
<p>
	{foo}
</p>
