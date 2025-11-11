<script>
    const {id, name, completed} = $props();
</script>

<main>
    <div class="todo">
        {#if completed}
            <span class="done">{id} - {name}</span>
        {:else}
            <span>{id}-{name}</span>
        {/if}
    </div>
</main>

<style>
    .done {
        text-decoration: line-through;
    }
</style>