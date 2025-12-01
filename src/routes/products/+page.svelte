<script>
	const { data } = $props();
</script>

<h1>
	Page Products
</h1>

<ul>
	{#each data.products as product}
		<li>
			<a href="/products/{product}">{product}</a>
		</li>
	{/each}
</ul>