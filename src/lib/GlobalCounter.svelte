<script>
    import {counter} from "../state/counter.svelte.js";

    function increment() {
        counter.count++
    }
</script>

<main>
    <button onclick="{increment}">
        {counter.count}
    </button>
</main>