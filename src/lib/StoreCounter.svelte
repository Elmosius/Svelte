<script>
    import {counter, increment} from '../state/counter.js'
</script>
<main>
    <button onclick="{increment}">
        {$counter.count}
    </button>
</main>