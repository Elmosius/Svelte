<script>
	const { data } = $props();
</script>

<h1>
	Page Todos
</h1>

<!--coba pke server form action-->
<form action="?/add" method="post">
	<label for="todo">
		<input id="todo" name="todo" type="text">
	</label>
	<button type="submit">Add Task</button>
</form>

<form action="?/delete" method="post">
	<ul>
		{#each data.todos as todo}
			<li>
				{todo.id} - {todo.name}
				<input type="hidden" name="id" value="{todo.id}" />
				<button type="submit">Delete</button>
			</li>
		{/each}
	</ul>
</form>
