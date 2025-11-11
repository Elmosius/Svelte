<script>
    import {getContext} from "svelte";

    const counter = getContext('counter')

    function increment() {
        counter.count++
    }
</script>

<main>
    <button on:click={increment}>{counter.count}</button>
</main>