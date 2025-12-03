<script>
	import { onMount } from 'svelte';
	import { invalidateAll } from '$app/navigation';

	const { data } = $props();

	async function getProduct() {
		const res = await fetch(`/api/products/${data.id}.json`);
		return res.json();
	}

	onMount(() => {
		invalidateAll();
	});
</script>

<a href="/products">Back to Products</a>

<!--{#await getProduct()}-->
<!--	<p>Loading...</p>-->
<!--{:then product}-->
<!--	<h1>{product.id} - {product.name}</h1>-->
<!--	<p>{product.description}</p>-->
<!--	<p>{product.price}</p>-->
<!--{:catch error}-->
<!--	<p>Error: {error.message}</p>-->
<!--{/await}-->

<h1>{data.id} - {data.name}</h1>
<p>{data.description}</p>
<p>{data.price}</p>
