<script>
	const { data } = $props();

	async function getProduct() {
		const res = await fetch(`/api/products/${data.id}.json`);
		return res.json();
	}
</script>

<a href="/products">Back to Products</a>

{#await getProduct()}
	<p>Loading...</p>
{:then product}
	<h1>{product.id} - {product.name}</h1>
	<p>{product.description}</p>
	<p>{product.price}</p>
{:catch error}
	<p>Error: {error.message}</p>
{/await}