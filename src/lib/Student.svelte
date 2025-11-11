<script>
    import {SvelteMap} from "svelte/reactivity";

    let students = new SvelteMap()

    let name = $state("")
    let value = $state(0)

    function addStudent() {
        students.set(name, value)
        name = ''
        value = 0
    }


</script>

<main>
    <h4>
        Size now: {students.size}
    </h4>

    <input bind:value={name} name="name" type="text"/>
    <input bind:value={value} name="value" type="text"/>

    <button on:click={addStudent}>Add Student</button>
    <button on:click={() => students.clear()}>Clear</button>

    <div style:display="flex">

        {#each students as entry (entry[0])}
            <p>{entry[0]} - {entry[1]}</p>
            <button on:click={() => students.delete(entry[0])}>Delete</button>
        {/each}
    </div>
</main>