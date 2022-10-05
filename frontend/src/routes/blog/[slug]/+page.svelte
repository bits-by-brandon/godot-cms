<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let {foo, slug} = data;
</script>

<h1>Blog post for {slug}</h1>
<p>
	{foo}
</p>
