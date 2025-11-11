<script>
    let {id, name, onedit} = $props();

    function save() {
        onedit(id, name);
    }
</script>

<div>
    {id} <input bind:value={name} id="{id}"/>
    <button onclick={save}>Save</button>
</div>