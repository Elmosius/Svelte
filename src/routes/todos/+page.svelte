<script>
	const { data } = $props();
</script>

<h1>
	Page Todos
</h1>
<ul>
	{#each data.todos as todo}
		<li>
			{todo}
		</li>
	{/each}
</ul>