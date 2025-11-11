<script>
    let count = $state(0);

    function increment() {
        count++;
    }
</script>

<main>
    <h1 id="counter">Counter : {count}</h1>
    <button onclick={increment}>On Click</button>
</main>