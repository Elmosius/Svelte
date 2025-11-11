<script>
    import Todo from "./Todo.svelte";
    import EditTodo from "./EditTodo.svelte";

    let todos = $state([])
    let name = $state('')

    function handleDelete(id) {
        todos = todos.filter((item) => item.id !== id)
    }

    function edit(id) {
        todos = todos.map((item) => (item.id === id ? {...item, edit: true} : item))
    }

    function handleEdit(id, name) {
        todos = todos.map((item) => (item.id === id ? {...item, name, edit: false} : item))
    }

    function handleSubmit(e) {
        e.preventDefault();

        const payload = {
            id: Date.now(),
            name,
            completed: false
        }

        todos.push(payload)

        name = ''
    }
</script>

<main>
    <form onsubmit="{handleSubmit}">
        <label for="name">
            <input bind:value="{name}" id="name" name="name" type="text">
        </label>

        <button type="submit">Add</button>
    </form>
    <button onclick={() => todos.shift()}>
        Delete
    </button>


    <ul>
        {#each todos as todo, i (todo.id)}
            <li>
                {#if !todo.edit}
                    <Todo {...todo}/>
                    <button onclick="{() => handleDelete(todo.id)}">Remove</button>
                    <button onclick="{() => edit(todo.id)}">Edit</button>
                {:else}
                    <EditTodo id="{todo.id}" name="{todo.name}" onedit="{handleEdit}"/>
                {/if}
            </li>
        {:else }
            <li>No todos</li>
        {/each}
    </ul>
</main>